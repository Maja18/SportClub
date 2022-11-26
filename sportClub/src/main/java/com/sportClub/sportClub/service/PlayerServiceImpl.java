package com.sportClub.sportClub.service;

import com.sportClub.sportClub.dto.PlayerDTO;
import com.sportClub.sportClub.mappers.PlayerMapper;
import com.sportClub.sportClub.mappers.SkillMapper;
import com.sportClub.sportClub.model.Player;
import com.sportClub.sportClub.model.Skill;
import com.sportClub.sportClub.model.SportClub;
import com.sportClub.sportClub.repository.PlayerRepository;
import com.sportClub.sportClub.repository.SportClubRepository;
import com.sportClub.sportClub.service.interface_service.PlayerService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PlayerServiceImpl implements PlayerService {

    private final PlayerRepository playerRepository;
    private final PlayerMapper playerMapper;

    private final SkillMapper skillMapper;

    private final SportClubRepository sportClubRepository;

    @Override
    public PlayerDTO getPlayerInfo(Long id) {
        Player player = playerRepository.findById(id).get();
        if (player != null){
            return playerMapper.playerToPlayerDTO(player);
        }
         return null;
    }

    @Override
    public PlayerDTO editPlayerInfo(PlayerDTO playerDTO) {
        Player player = playerRepository.findById(playerDTO.getId()).get();
        List<Skill> skills = skillMapper.skillsDTOToSkills(playerDTO.getPlayerSkills());
        if (player != null){
            player.setPlayerName(playerDTO.getPlayerName());
            player.setImage(playerDTO.getImage());
            player.setSalary(playerDTO.getSalary());
            player.setPlayerSkills(skills);
        }
        playerRepository.save(player);
        
        return playerMapper.playerToPlayerDTO(player);
    }

    @Override
    public List<PlayerDTO> getAllPlayers() {
        List<Player> players = playerRepository.findAll();
        return playerMapper.playersToPlayerDTOs(players);
    }

    @Override
    public PlayerDTO addNewPlayer(PlayerDTO playerDTO) {
        Player player = playerMapper.playerDTOToPlayer(playerDTO);
        playerRepository.save(player);
        return playerMapper.playerToPlayerDTO(player);
    }

    @Override
    public PlayerDTO deletePlayer(Long id) {
        Player player = playerRepository.findById(id).get();
        if (player != null){
            playerRepository.delete(player);
        }
        return playerMapper.playerToPlayerDTO(player);
    }

    @Override
    public List<PlayerDTO> getAllClubPlayers(Long clubId) {
        SportClub sportClub = sportClubRepository.findById(clubId).get();
        List<Player> clubPlayers = new ArrayList<>();
        if (sportClub != null){
            clubPlayers = sportClub.getPlayers();
        }
        return playerMapper.playersToPlayerDTOs(clubPlayers);
    }

    @Override
    public List<PlayerDTO> getAllPlayersWithoutClub() {
        List<Player> allPlayers = playerRepository.findAll();
        List<SportClub> sportClubs = sportClubRepository.findAll();
        List<Player> playersInClubs = new ArrayList<>();
        sportClubs.stream().forEach(sportClub -> {
            List<Player> clubPlayers = sportClub.getPlayers();
            clubPlayers.forEach(player -> {
                playersInClubs.add(player);
            });
        });

        List<Player> playersWithoutClub = allPlayers.stream().filter(player -> playersInClubs.stream()
                        .noneMatch(p -> p.getId().equals(player.getId())))
                .collect(Collectors.toList());

        return playerMapper.playersToPlayerDTOs(playersWithoutClub);
    }
}

package com.sportClub.sportClub.service;

import com.sportClub.sportClub.dto.PlayerDTO;
import com.sportClub.sportClub.mappers.PlayerMapper;
import com.sportClub.sportClub.mappers.SkillMapper;
import com.sportClub.sportClub.model.Player;
import com.sportClub.sportClub.model.Skill;
import com.sportClub.sportClub.repository.PlayerRepository;
import com.sportClub.sportClub.service.interface_service.PlayerService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PlayerServiceImpl implements PlayerService {

    private final PlayerRepository playerRepository;
    private final PlayerMapper playerMapper;

    private final SkillMapper skillMapper;
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

}

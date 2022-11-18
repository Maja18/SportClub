package com.sportClub.sportClub.service;

import com.sportClub.sportClub.dto.ClubDTO;
import com.sportClub.sportClub.dto.PlayerDTO;
import com.sportClub.sportClub.mappers.PlayerMapper;
import com.sportClub.sportClub.mappers.SportClubMapper;
import com.sportClub.sportClub.model.Player;
import com.sportClub.sportClub.model.SportClub;
import com.sportClub.sportClub.repository.PlayerRepository;
import com.sportClub.sportClub.repository.SportClubRepository;
import com.sportClub.sportClub.service.interface_service.SportClubService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SportClubServiceImpl implements SportClubService {

    private final SportClubRepository sportClubRepository;

    private final SportClubMapper sportClubMapper;

    private final PlayerRepository playerRepository;

    private final PlayerMapper playerMapper;
    @Override
    public List<ClubDTO> getAllSportClubs() {
        List<SportClub> sportClubs = sportClubRepository.findAll();
        return sportClubMapper.clubsToClubsDTO(sportClubs);
    }

    @Override
    public ClubDTO addNewSportClub(ClubDTO clubDTO) {
        SportClub club = sportClubMapper.clubDTOToClub(clubDTO);
        List<Player> players = club.getPlayers();
        if (players != null){
            for (Player p: players) {
                playerRepository.save(p);
            }
        }
        sportClubRepository.save(club);

        return sportClubMapper.clubToClubDTO(club);
    }

    @Override
    public ClubDTO editClubInfo(ClubDTO clubDTO) {
        SportClub club = sportClubRepository.findById(clubDTO.getId()).get();
        if (club != null){
            club.setName(clubDTO.getName());
        }

        sportClubRepository.save(club);

        return sportClubMapper.clubToClubDTO(club);
    }

    @Override
    public ClubDTO addNewPlayerToClub(ClubDTO clubDTO) {
        SportClub sportClub = sportClubRepository.findById(clubDTO.getId()).get();
        if (sportClub != null){
            List<Player> players = playerMapper.playerDTOsToPlayers(clubDTO.getPlayers());
            sportClub.setPlayers(players);
        }
        sportClubRepository.save(sportClub);
        return sportClubMapper.clubToClubDTO(sportClub);
    }
}

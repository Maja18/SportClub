package com.sportClub.sportClub.service;

import com.sportClub.sportClub.dto.ClubDTO;
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
}

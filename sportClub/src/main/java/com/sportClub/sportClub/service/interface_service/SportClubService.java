package com.sportClub.sportClub.service.interface_service;

import com.sportClub.sportClub.dto.ClubDTO;

import java.util.List;

public interface SportClubService {
    List<ClubDTO> getAllSportClubs();
    ClubDTO addNewSportClub(ClubDTO clubDTO);
    ClubDTO editClubInfo(ClubDTO clubDTO);
    ClubDTO addNewPlayerToClub(ClubDTO clubDTO);
}

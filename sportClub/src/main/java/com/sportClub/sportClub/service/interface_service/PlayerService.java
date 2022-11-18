package com.sportClub.sportClub.service.interface_service;

import com.sportClub.sportClub.dto.PlayerDTO;

import java.util.List;

public interface PlayerService {
    PlayerDTO getPlayerInfo(Long id);
    PlayerDTO editPlayerInfo(PlayerDTO playerDTO);
    List<PlayerDTO> getAllPlayers();
    PlayerDTO addNewPlayer(PlayerDTO playerDTO);
    PlayerDTO deletePlayer(Long id);
    List<PlayerDTO> getAllClubPlayers(Long clubId);
}

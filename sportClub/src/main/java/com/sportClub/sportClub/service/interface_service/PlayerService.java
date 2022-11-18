package com.sportClub.sportClub.service.interface_service;

import com.sportClub.sportClub.dto.PlayerDTO;

public interface PlayerService {
    PlayerDTO getPlayerInfo(Long id);
    PlayerDTO editPlayerInfo(PlayerDTO playerDTO);
}

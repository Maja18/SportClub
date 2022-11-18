package com.sportClub.sportClub.service;

import com.sportClub.sportClub.dto.PlayerDTO;
import com.sportClub.sportClub.mappers.PlayerMapper;
import com.sportClub.sportClub.model.Player;
import com.sportClub.sportClub.repository.PlayerRepository;
import com.sportClub.sportClub.service.interface_service.PlayerService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PlayerServiceImpl implements PlayerService {

    private final PlayerRepository playerRepository;
    private final PlayerMapper playerMapper;
    @Override
    public PlayerDTO getPlayerInfo(Long id) {
        Player player = playerRepository.findById(id).get();
        if (player != null){
            return playerMapper.playerToPlayerDTO(player);
        }
         return null;
    }
}

package com.sportClub.sportClub.mappers;

import com.sportClub.sportClub.dto.PlayerDTO;
import com.sportClub.sportClub.model.Player;
import org.mapstruct.InjectionStrategy;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper(
        componentModel = "spring",
        injectionStrategy = InjectionStrategy.FIELD
)
public interface PlayerMapper {
    PlayerMapper INSTANCE = Mappers.getMapper(PlayerMapper.class);
    PlayerDTO playerToPlayerDTO(Player player);
    List<PlayerDTO> playersToPlayerDTOs(List<Player> player);
    Player playerDTOToPlayer(PlayerDTO playerDTO);
    List<Player> playerDTOsToPlayers(List<PlayerDTO> playerDTOs);
}

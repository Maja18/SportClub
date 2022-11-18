package com.sportClub.sportClub.mappers;

import com.sportClub.sportClub.dto.ClubDTO;
import com.sportClub.sportClub.model.SportClub;
import org.mapstruct.InjectionStrategy;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper(
        componentModel = "spring",
        injectionStrategy = InjectionStrategy.FIELD
)
public interface SportClubMapper {
    SportClubMapper INSTANCE = Mappers.getMapper(SportClubMapper.class);
    List<ClubDTO> clubsToClubsDTO(List<SportClub> sportClub);
    SportClub clubDTOToClub(ClubDTO clubDTO);
    ClubDTO clubToClubDTO(SportClub club);
}

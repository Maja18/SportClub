package com.sportClub.sportClub.dto;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@RequiredArgsConstructor
public class ClubDTO {
    private String name;
    private List<PlayerDTO> players;
}

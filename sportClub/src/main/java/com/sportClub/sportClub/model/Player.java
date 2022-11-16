package com.sportClub.sportClub.model;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@RequiredArgsConstructor
public class Player {
    private Long id;
    private String playerName;
    private String image;
    private List<Skill> playerSkills;
    private Integer salary;

}

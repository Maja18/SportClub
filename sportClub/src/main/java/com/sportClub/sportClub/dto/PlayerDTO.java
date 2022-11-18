package com.sportClub.sportClub.dto;

import com.sportClub.sportClub.model.Skill;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@RequiredArgsConstructor
public class PlayerDTO {
    private Long id;
    private String playerName;
    private String image;
    private Integer salary;
    private List<SkillSTO> playerSkills;
}

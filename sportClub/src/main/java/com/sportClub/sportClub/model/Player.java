package com.sportClub.sportClub.model;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@RequiredArgsConstructor
@Entity
public class Player {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String playerName;

    @Column
    private String image;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "player_skills",
            joinColumns = @JoinColumn(name = "player_id"),
            inverseJoinColumns = @JoinColumn(name = "skill_id"))
    private List<Skill> playerSkills;

    @Column
    private Integer salary;

}

package com.sportClub.sportClub.model;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@RequiredArgsConstructor
public class SportClub {

    private String name;
    List<Player> players;

}

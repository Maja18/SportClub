package com.sportClub.sportClub.controller;

import com.sportClub.sportClub.dto.ClubDTO;
import com.sportClub.sportClub.dto.PlayerDTO;
import com.sportClub.sportClub.model.Person;
import com.sportClub.sportClub.model.Player;
import com.sportClub.sportClub.service.PersonServiceImpl;
import com.sportClub.sportClub.service.PlayerServiceImpl;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/api/player")
@RequiredArgsConstructor
@SecurityRequirement(name = "javainuseapi")
public class PlayerController {

    private PersonServiceImpl personService;

    private final PlayerServiceImpl playerService;

    @GetMapping("/{player-id}")
    @PreAuthorize("hasAnyAuthority({'ROLE_EDITOR','ROLE_VIEWER'})")
    ResponseEntity<PlayerDTO> getPlayerInfo(@PathVariable(name="player-id") Long playerId)
    {
        PlayerDTO player = playerService.getPlayerInfo(playerId);

        return player == null ?
                new ResponseEntity<>(HttpStatus.NOT_FOUND) : ResponseEntity.ok(player);
    }
}

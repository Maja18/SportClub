package com.sportClub.sportClub.controller;

import com.sportClub.sportClub.dto.ClubDTO;
import com.sportClub.sportClub.service.SportClubServiceImpl;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.security.RolesAllowed;
import java.util.List;

@RestController
@RequestMapping(value = "/api/club")
@RequiredArgsConstructor
@SecurityRequirement(name = "javainuseapi")
public class SportClubController {

    private final SportClubServiceImpl sportClubService;

    @GetMapping
    @RolesAllowed({ "ROLE_EDITOR", "ROLE_VIEWER" })
    ResponseEntity<List<ClubDTO>> getAllSportClubs()
    {
        List<ClubDTO> sportClubs = sportClubService.getAllSportClubs();

        return sportClubs == null ?
                new ResponseEntity<>(HttpStatus.NOT_FOUND) : ResponseEntity.ok(sportClubs);
    }
}

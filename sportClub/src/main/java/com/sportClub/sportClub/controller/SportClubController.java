package com.sportClub.sportClub.controller;

import com.sportClub.sportClub.dto.ClubDTO;
import com.sportClub.sportClub.dto.PersonDTO;
import com.sportClub.sportClub.service.SportClubServiceImpl;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.annotation.security.RolesAllowed;
import java.util.List;

@RestController
@RequestMapping(value = "/api/club")
@RequiredArgsConstructor
@SecurityRequirement(name = "javainuseapi")
public class SportClubController {

    private final SportClubServiceImpl sportClubService;

    @GetMapping
    @PreAuthorize("hasAnyAuthority({'ROLE_EDITOR','ROLE_VIEWER'})")
    ResponseEntity<List<ClubDTO>> getAllSportClubs()
    {
        List<ClubDTO> sportClubs = sportClubService.getAllSportClubs();

        return sportClubs == null ?
                new ResponseEntity<>(HttpStatus.NOT_FOUND) : ResponseEntity.ok(sportClubs);
    }

    @PostMapping
    @PreAuthorize("hasAuthority('ROLE_EDITOR')")
    public ResponseEntity<ClubDTO> addNewSportClub(@RequestBody ClubDTO clubDTO) {
        ClubDTO club = sportClubService.addNewSportClub(clubDTO);

        return (ResponseEntity<ClubDTO>) (club == null ?
                new ResponseEntity<>(HttpStatus.NOT_FOUND) : ResponseEntity.ok(club));

    }

    @PutMapping
    @PreAuthorize("hasAuthority('ROLE_EDITOR')")
    public ResponseEntity<ClubDTO> editClubInfo(@RequestBody ClubDTO clubDTO ) {
        ClubDTO club = sportClubService.editClubInfo(clubDTO);

        return club == null ?
                new ResponseEntity<>(HttpStatus.NOT_FOUND) : ResponseEntity.ok(club);
    }

}

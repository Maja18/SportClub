package com.sportClub.sportClub.controller;

import com.sportClub.sportClub.dto.PlayerDTO;
import com.sportClub.sportClub.service.PlayerServiceImpl;
import com.sportClub.sportClub.utils.MediaUpload;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping(value = "/api/player")
@RequiredArgsConstructor
@SecurityRequirement(name = "javainuseapi")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class PlayerController {
    private final PlayerServiceImpl playerService;

    private static String uploadDir = "user-photos";

    @GetMapping("/{player-id}")
    @PreAuthorize("hasAnyAuthority({'ROLE_EDITOR','ROLE_VIEWER'})")
    ResponseEntity<PlayerDTO> getPlayerInfo(@PathVariable(name="player-id") Long playerId)
    {
        PlayerDTO player = playerService.getPlayerInfo(playerId);

        return player == null ?
                new ResponseEntity<>(HttpStatus.NOT_FOUND) : ResponseEntity.ok(player);
    }

    @PutMappingsh
    @PreAuthorize("hasAuthority('ROLE_EDITOR')")
    public ResponseEntity<PlayerDTO> editPlayerInfo(@RequestBody PlayerDTO playerDTO ) {
        PlayerDTO player = playerService.editPlayerInfo(playerDTO);

        return player == null ?
                new ResponseEntity<>(HttpStatus.NOT_FOUND) : ResponseEntity.ok(player);
    }

    @GetMapping
    @PreAuthorize("hasAuthority('ROLE_EDITOR')")
    public ResponseEntity<List<PlayerDTO>> getAllPlayers() {
        List<PlayerDTO> players = playerService.getAllPlayers();

        return players == null ?
                new ResponseEntity<>(HttpStatus.NOT_FOUND) : ResponseEntity.ok(players);
    }

    @PostMapping
    @PreAuthorize("hasAuthority('ROLE_EDITOR')")
    public ResponseEntity<PlayerDTO> addNewPlayer(@RequestBody PlayerDTO playerDTO ) {
        PlayerDTO player = playerService.addNewPlayer(playerDTO);

        return player == null ?
                new ResponseEntity<>(HttpStatus.NOT_FOUND) : ResponseEntity.ok(player);
    }

    @DeleteMapping("/{player-id}")
    @PreAuthorize("hasAuthority('ROLE_EDITOR')")
    public ResponseEntity<PlayerDTO> deletePlayer(@PathVariable(name="player-id") Long playerId ) {
        PlayerDTO player = playerService.deletePlayer(playerId);

        return player == null ?
                new ResponseEntity<>(HttpStatus.NOT_FOUND) : ResponseEntity.ok(player);
    }

    @GetMapping("players/{club-id}")
    @PreAuthorize("hasAnyAuthority({'ROLE_EDITOR','ROLE_VIEWER'})")
    ResponseEntity<List<PlayerDTO>> getAllClubPlayers(@PathVariable(name="club-id") Long clubId)
    {
        List<PlayerDTO> players = playerService.getAllClubPlayers(clubId);

        return players == null ?
                new ResponseEntity<>(HttpStatus.NOT_FOUND) : ResponseEntity.ok(players);
    }

    @GetMapping("noClubPlayers")
    @PreAuthorize("hasAuthority('ROLE_EDITOR')")
    public ResponseEntity<List<PlayerDTO>> getAllPlayersWithoutClub() {
        List<PlayerDTO> players = playerService.getAllPlayersWithoutClub();

        return players == null ?
                new ResponseEntity<>(HttpStatus.NOT_FOUND) : ResponseEntity.ok(players);
    }

    @PostMapping(value="/saveImage", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    @PreAuthorize("hasAuthority('ROLE_EDITOR')")
    public String saveImageForRequest(@RequestParam("file") MultipartFile multipartFile ) throws IOException {

        String fileName = StringUtils.cleanPath(multipartFile.getOriginalFilename().replaceAll("\\s", ""));
        MediaUpload.saveFile(uploadDir, fileName, multipartFile);
        return fileName;
    }

}

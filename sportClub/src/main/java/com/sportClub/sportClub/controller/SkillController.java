package com.sportClub.sportClub.controller;

import com.sportClub.sportClub.dto.PlayerDTO;
import com.sportClub.sportClub.dto.SkillSTO;
import com.sportClub.sportClub.service.SkillServiceImpl;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/api/skill")
@RequiredArgsConstructor
@SecurityRequirement(name = "javainuseapi")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class SkillController {

    private final SkillServiceImpl skillService;

    @GetMapping
    @PreAuthorize("hasAuthority('ROLE_EDITOR')")
    public ResponseEntity<List<SkillSTO>> getAllSkills() {
        List<SkillSTO> skills = skillService.getAllSkills();

        return skills == null ?
                new ResponseEntity<>(HttpStatus.NOT_FOUND) : ResponseEntity.ok(skills);
    }
}

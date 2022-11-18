package com.sportClub.sportClub.controller;

import com.sportClub.sportClub.dto.PersonDTO;
import com.sportClub.sportClub.service.PersonServiceImpl;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.security.RolesAllowed;

@RestController
@RequestMapping(value = "/api/person")
@RequiredArgsConstructor
@SecurityRequirement(name = "javainuseapi")
public class PersonController {

    private final PersonServiceImpl personService;

    @PutMapping
    @PreAuthorize("hasAnyAuthority({'ROLE_EDITOR','ROLE_VIEWER'})")
    public ResponseEntity<PersonDTO> editPersonInfo(@RequestBody PersonDTO personDTO ) {
        PersonDTO person = personService.editPersonInfo(personDTO);

        return person == null ?
                new ResponseEntity<>(HttpStatus.NOT_FOUND) : ResponseEntity.ok(person);
    }

}

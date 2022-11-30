package com.sportClub.sportClub.controller;

import com.sportClub.sportClub.dto.PasswordChangerDTO;
import com.sportClub.sportClub.dto.PersonDTO;
import com.sportClub.sportClub.exceptions.PersonException;
import com.sportClub.sportClub.model.Authority;
import com.sportClub.sportClub.model.Person;
import com.sportClub.sportClub.service.PersonServiceImpl;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping(value = "/api/person")
@RequiredArgsConstructor
@SecurityRequirement(name = "javainuseapi")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class PersonController {

    private final PersonServiceImpl personService;

    @PutMapping
    @PreAuthorize("hasAnyAuthority({'ROLE_EDITOR','ROLE_VIEWER'})")
    public ResponseEntity<PersonDTO> editPersonInfo(@RequestBody PersonDTO personDTO ) {
        PersonDTO person = personService.editPersonInfo(personDTO);

        return person == null ?
                new ResponseEntity<>(HttpStatus.NOT_FOUND) : ResponseEntity.ok(person);
    }

    @PostMapping(value = "/change-password")
    @PreAuthorize("hasAnyAuthority({'ROLE_EDITOR','ROLE_VIEWER'})")
    public ResponseEntity<?> changePassword(@RequestBody PasswordChangerDTO passwordChanger) {
        personService.changePassword(passwordChanger);

        Map<String, String> result = new HashMap<>();
        result.put("result", "success");
        return ResponseEntity.accepted().body(result);
    }

    @GetMapping
    @PreAuthorize("hasAnyAuthority({'ROLE_EDITOR','ROLE_VIEWER'})")
    public ResponseEntity<PersonDTO> getLoggedPersonProfile(){
        Authentication currentUser = SecurityContextHolder.getContext().getAuthentication();
        Person user = (Person)currentUser.getPrincipal();
        Collection<?> userRoles = user.getAuthorities();
        PersonDTO loggedPerson = personService.getLoggedPersonProfile(user);
        for(Object role : userRoles){
            loggedPerson.setRole(role.toString());
        }

        return  loggedPerson == null ?
                new ResponseEntity<>(HttpStatus.NOT_FOUND) : ResponseEntity.ok(loggedPerson);
    }

}

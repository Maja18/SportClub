package com.sportClub.sportClub.controller;

import com.sportClub.sportClub.dto.PersonDTO;
import com.sportClub.sportClub.dto.UserTokenStateDTO;
import com.sportClub.sportClub.exceptions.PersonException;
import com.sportClub.sportClub.model.Person;
import com.sportClub.sportClub.security.TokenUtils;
import com.sportClub.sportClub.security.auth.JwtAuthenticationRequest;
import com.sportClub.sportClub.service.AuthenticationServiceImpl;
import com.sportClub.sportClub.service.PersonServiceImpl;
import com.sportClub.sportClub.service.interface_service.AuthenticationService;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;

@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/api/auth", produces = MediaType.APPLICATION_JSON_VALUE)
@SecurityRequirement(name = "javainuseapi")
public class AuthenticationController {

    private final AuthenticationServiceImpl authenticationService;
    private final TokenUtils tokenUtils;

    private final PersonServiceImpl personService;
    @PostMapping("/login")
    public ResponseEntity<UserTokenStateDTO> createAuthenticationToken(@RequestBody JwtAuthenticationRequest authenticationRequest,
                                                                       HttpServletResponse response) {
        Person person = authenticationService.getPerson(authenticationRequest);
        String jwt = tokenUtils.generateToken(person.getUsername());
        int expiresIn = tokenUtils.getExpiredIn();

        return ResponseEntity.ok(new UserTokenStateDTO(jwt, expiresIn));
    }

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody PersonDTO userRequest) {
        Person existingPerson = personService.findByEmailEquals(userRequest.getEmail());
        if (existingPerson == null) {
            PersonDTO person = personService.registerUser(userRequest);
        }else{
            throw new PersonException("Person with given email already exists");
        }

        return new ResponseEntity<>("User is successfully registred!", HttpStatus.CREATED);
    }


}

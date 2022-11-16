package com.sportClub.sportClub.controller;

import com.sportClub.sportClub.dto.UserTokenStateDTO;
import com.sportClub.sportClub.model.Person;
import com.sportClub.sportClub.security.TokenUtils;
import com.sportClub.sportClub.security.auth.JwtAuthenticationRequest;
import com.sportClub.sportClub.service.AuthenticationServiceImpl;
import com.sportClub.sportClub.service.interface_service.AuthenticationService;
import lombok.RequiredArgsConstructor;
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
public class AuthenticationController {

    private final AuthenticationServiceImpl authenticationService;
    private final TokenUtils tokenUtils;
    @PostMapping("/login")
    public ResponseEntity<UserTokenStateDTO> createAuthenticationToken(@RequestBody JwtAuthenticationRequest authenticationRequest,
                                                                       HttpServletResponse response) {
        Person person = authenticationService.getPerson(authenticationRequest);
        String jwt = tokenUtils.generateToken(person.getUsername());
        int expiresIn = tokenUtils.getExpiredIn();

        return ResponseEntity.ok(new UserTokenStateDTO(jwt, expiresIn));
    }


}

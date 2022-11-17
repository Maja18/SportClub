package com.sportClub.sportClub.service;

import com.sportClub.sportClub.dto.PersonDTO;
import com.sportClub.sportClub.mappers.PersonMapper;
import com.sportClub.sportClub.model.Authority;
import com.sportClub.sportClub.model.Person;
import com.sportClub.sportClub.repository.AuthorityRepository;
import com.sportClub.sportClub.repository.PersonRepository;
import com.sportClub.sportClub.security.auth.JwtAuthenticationRequest;
import com.sportClub.sportClub.service.interface_service.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AuthenticationServiceImpl implements AuthenticationService {

    private AuthenticationManager authenticationManager;

    private AuthorityRepository authorityRepository;

    private PasswordEncoder passwordEncoder;

    private PersonRepository personRepository;

    private AuthenticationServiceImpl authenticationService;

    public AuthenticationServiceImpl(AuthenticationManager authenticationManager,AuthorityRepository authorityRepository ){
        this.authenticationManager = authenticationManager;
        this.authorityRepository = authorityRepository;
    }

    @Override
    public Authority findById(Long id) {
        return authorityRepository.findById(id).get();
    }

    @Override
    public Authority findByName(String name) {
        return authorityRepository.findByNameEquals(name);
    }

    @Override
    public Person getPerson(JwtAuthenticationRequest authenticationRequest) {
        Authentication authentication = authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(authenticationRequest.getEmail(),
                        authenticationRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);

        return (Person) authentication.getPrincipal();
    }
}

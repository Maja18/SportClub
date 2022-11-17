package com.sportClub.sportClub.service.interface_service;

import com.sportClub.sportClub.dto.PersonDTO;
import com.sportClub.sportClub.model.Authority;
import com.sportClub.sportClub.model.Person;
import com.sportClub.sportClub.security.auth.JwtAuthenticationRequest;

public interface AuthenticationService {
    Person getPerson(JwtAuthenticationRequest authenticationRequest);
    Authority findById(Long id);
    Authority findByName(String name);
}

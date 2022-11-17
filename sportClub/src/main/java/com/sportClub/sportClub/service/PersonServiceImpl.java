package com.sportClub.sportClub.service;

import com.sportClub.sportClub.model.Person;
import com.sportClub.sportClub.repository.PersonRepository;
import com.sportClub.sportClub.service.interface_service.PersonService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PersonServiceImpl implements PersonService {

    private final PersonRepository personRepository;
    @Override
    public Person findByEmailEquals(String email) {
        return personRepository.findByEmailEquals(email);
    }

    @Override
    public Person findById(Long id) {
        return personRepository.findById(id).get();
    }

}

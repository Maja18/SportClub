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
public class PersonServiceImpl implements PersonService, UserDetailsService {

    private final PersonRepository personRepository;
    @Override
    public Person findByEmailEquals(String email) {
        return personRepository.findByEmailEquals(email);
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException { //email ne username!
        //kako hocemo da nam dobavi korisnika spring security
        Person person = personRepository.findByEmailEquals(email);
        if (person == null) {
            throw new UsernameNotFoundException(String.format("No user found with username '%s'.", email));
        } else {
            return person;
        }
    }
}

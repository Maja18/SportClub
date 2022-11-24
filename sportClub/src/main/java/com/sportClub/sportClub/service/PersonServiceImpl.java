package com.sportClub.sportClub.service;

import com.sportClub.sportClub.dto.PersonDTO;
import com.sportClub.sportClub.mappers.PersonMapper;
import com.sportClub.sportClub.model.Authority;
import com.sportClub.sportClub.model.Person;
import com.sportClub.sportClub.repository.PersonRepository;
import com.sportClub.sportClub.service.interface_service.PersonService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PersonServiceImpl implements PersonService {

    private final PersonRepository personRepository;
    private final AuthenticationServiceImpl authenticationService;
    private final PasswordEncoder passwordEncoder;

    private final  PersonMapper personMapper;
    @Override
    public Person findByEmailEquals(String email) {
        return personRepository.findByEmailEquals(email);
    }

    @Override
    public Person findById(Long id) {
        return personRepository.findById(id).get();
    }

    @Override
    public PersonDTO registerUser(PersonDTO userRequest){
        Person person = personMapper.personDTOToPerson(userRequest);
        person.setPassword(passwordEncoder.encode(userRequest.getPassword()));
        List<Authority> authorities = new ArrayList<>();
        if (userRequest.getRole().equals("EDITOR")){
            authorities.add(authenticationService.findByName("ROLE_EDITOR"));
        }else if (userRequest.getRole().equals("VIEWER")){
            authorities.add(authenticationService.findByName("ROLE_VIEWER"));
        }
        person.setAuthorities(authorities);
        personRepository.save(person);

        return personMapper.personToPersonDTO(person);
    }

    @Override
    public PersonDTO editPersonInfo(PersonDTO personDTO) {
        Person person = personRepository.findById(personDTO.getId()).get();
        if (person != null){
            person.setFirstName(personDTO.getFirstName());
            person.setLastName(personDTO.getLastName());
            person.setPassword(passwordEncoder.encode(personDTO.getPassword()));
            person.setEmail(personDTO.getEmail());
            personRepository.save(person);
        }

        return personMapper.personToPersonDTO(person);
    }

    @Override
    public PersonDTO getLoggedPersonProfile(Person person) {
        Person user = personRepository.findById(person.getId()).get();
        return personMapper.personToPersonDTO(user);
    }

}

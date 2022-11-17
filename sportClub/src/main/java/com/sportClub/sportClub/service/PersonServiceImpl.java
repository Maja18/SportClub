package com.sportClub.sportClub.service;

import com.sportClub.sportClub.dto.PersonDTO;
import com.sportClub.sportClub.mappers.PersonMapper;
import com.sportClub.sportClub.model.Authority;
import com.sportClub.sportClub.model.Person;
import com.sportClub.sportClub.repository.PersonRepository;
import com.sportClub.sportClub.service.interface_service.PersonService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PersonServiceImpl implements PersonService {

    private final PersonRepository personRepository;
    private final AuthenticationServiceImpl authenticationService;
    private final PasswordEncoder passwordEncoder;
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
        Person person = new Person();
        person.setPassword(passwordEncoder.encode(userRequest.getPassword()));
        person.setFirstName(userRequest.getFirstName());
        person.setLastName(userRequest.getLastName());
        person.setEmail(userRequest.getEmail());
        List<Authority> authorities = new ArrayList<>();
        if (userRequest.getRole().equals("EDITOR")){
            authorities.add(authenticationService.findByName("ROLE_EDITOR"));
        }else if (userRequest.getRole().equals("VIEWER")){
            authorities.add(authenticationService.findByName("ROLE_VIEWER"));
        }
        person.setAuthorities(authorities);
        personRepository.save(person);

        return userRequest;
    }

    @Override
    public PersonDTO editPersonInfo(PersonDTO personDTO) {
        Person person = personRepository.findByEmailEquals(personDTO.getEmail());
        if (person != null){
            person.setFirstName(personDTO.getFirstName());
            person.setLastName(personDTO.getLastName());
            person.setPassword(passwordEncoder.encode(personDTO.getPassword()));
            person.setEmail(personDTO.getEmail());
            personRepository.save(person);
        }
        PersonDTO editedPerson = new PersonDTO();
        editedPerson.setFirstName(person.getFirstName());
        editedPerson.setLastName(person.getLastName());
        editedPerson.setEmail(person.getEmail());
        editedPerson.setPassword(person.getPassword());

        return editedPerson;
    }

}

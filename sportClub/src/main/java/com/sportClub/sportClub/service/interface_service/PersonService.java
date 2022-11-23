package com.sportClub.sportClub.service.interface_service;

import com.sportClub.sportClub.dto.PersonDTO;
import com.sportClub.sportClub.model.Person;

public interface PersonService {
    Person findByEmailEquals(String email);
    Person findById(Long id);
    PersonDTO registerUser(PersonDTO userRequest);
    PersonDTO editPersonInfo(PersonDTO personDTO);
    PersonDTO getLoggedPersonProfile(Person person);
}

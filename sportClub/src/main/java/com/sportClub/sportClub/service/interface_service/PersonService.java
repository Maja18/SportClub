package com.sportClub.sportClub.service.interface_service;

import com.sportClub.sportClub.model.Person;

public interface PersonService {
    Person findByEmailEquals(String email);
}

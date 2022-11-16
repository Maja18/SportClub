package com.sportClub.sportClub.repository;

import com.sportClub.sportClub.model.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonRepository extends JpaRepository<Person, Long> {
    Person findByEmailEquals(String email);
}

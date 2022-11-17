package com.sportClub.sportClub.mappers;


import com.sportClub.sportClub.dto.PersonDTO;
import com.sportClub.sportClub.model.Person;
import org.mapstruct.InjectionStrategy;
import org.mapstruct.Mapper;

@Mapper(
        componentModel = "spring",
        injectionStrategy = InjectionStrategy.FIELD
)

public interface PersonMapper {
    PersonDTO personToPersonDTO(Person person);
    Person personDTOToPerson(PersonDTO personDTO);
}

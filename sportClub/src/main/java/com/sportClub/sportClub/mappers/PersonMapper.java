package com.sportClub.sportClub.mappers;


import com.sportClub.sportClub.dto.PersonDTO;
import com.sportClub.sportClub.model.Person;
import org.mapstruct.InjectionStrategy;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper(
        componentModel = "spring",
        injectionStrategy = InjectionStrategy.FIELD
)
public interface PersonMapper {
    PersonMapper INSTANCE = Mappers.getMapper(PersonMapper.class);
    PersonDTO personToPersonDTO(Person person);
    Person personDTOToPerson(PersonDTO personDTO);
}

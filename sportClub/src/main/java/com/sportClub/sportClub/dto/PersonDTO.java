package com.sportClub.sportClub.dto;

import com.sportClub.sportClub.model.Role;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@RequiredArgsConstructor
public class PersonDTO {
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String role;
}

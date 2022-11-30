package com.sportClub.sportClub.dto;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@RequiredArgsConstructor
public class PasswordChangerDTO {
    private Long userId;
    private String newPassword;
}

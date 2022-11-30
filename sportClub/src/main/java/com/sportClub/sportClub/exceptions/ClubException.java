package com.sportClub.sportClub.exceptions;

import com.sportClub.sportClub.model.SportClub;
import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@Setter
@Getter
@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ClubException extends RuntimeException {

    private SportClub club;
    private Long clubId;

    public ClubException(String message) {
        super(message);
    }

    public ClubException(SportClub club, String message) {
        super(message);
        this.club = club;
    }
}

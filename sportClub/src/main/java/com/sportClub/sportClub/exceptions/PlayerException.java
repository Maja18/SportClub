package com.sportClub.sportClub.exceptions;

import com.sportClub.sportClub.model.Player;
import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@Setter
@Getter
@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class PlayerException extends RuntimeException {

    private Player player;
    private Long playerId;

    public PlayerException(String message) {
        super(message);
    }

    public PlayerException(Player player, String message) {
        super(message);
        this.player = player;
    }
}

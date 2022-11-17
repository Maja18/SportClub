package com.sportClub.sportClub.controller;

import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/player")
@RequiredArgsConstructor
@SecurityRequirement(name = "javainuseapi")
public class PlayerController {
}

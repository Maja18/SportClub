package com.sportClub.sportClub.security.auth;

public class JWTAuthenticationRequest {
    private String username;
    private String password;

    public JWTAuthenticationRequest() {
        super();
    }

    public JWTAuthenticationRequest(String email, String password) {
        this.setUsername(email);
        this.setPassword(password);
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getUsername() {
        return this.username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

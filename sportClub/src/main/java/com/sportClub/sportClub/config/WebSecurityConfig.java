package com.sportClub.sportClub.config;

import com.sportClub.sportClub.repository.AuthorityRepository;
import com.sportClub.sportClub.repository.PersonRepository;
import com.sportClub.sportClub.security.TokenUtils;
import com.sportClub.sportClub.security.auth.RestAuthenticationEntryPoint;
import com.sportClub.sportClub.security.auth.TokenAuthenticationFilter;
import com.sportClub.sportClub.service.CustomUserDetailsService;
import com.sportClub.sportClub.service.PersonServiceImpl;
import com.sportClub.sportClub.service.interface_service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class WebSecurityConfig {

    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    @Autowired
    private PersonServiceImpl jwtPersonService;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http, TokenUtils tokenUtils, RestAuthenticationEntryPoint restAuthenticationEntryPoint, CustomUserDetailsService jwtUserDetailsService, PersonRepository personRepository, AuthorityRepository authorityRepository) throws Exception {

        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
                .exceptionHandling().authenticationEntryPoint(restAuthenticationEntryPoint).and()
                .cors().and()
                .authorizeRequests()
                .antMatchers("/auth/login").hasAnyAuthority("ROLE_EDITOR", "ROLE_VIEWER")
                .antMatchers("/api/auth/authority").hasAnyAuthority("ROLE_EDITOR","ROLE_VIEWER")
                .antMatchers("/api/**").permitAll()
                // za svaki drugi zahtev korisnik mora biti autentifikovan
                .anyRequest().authenticated().and()
                // za development svrhe ukljuci konfiguraciju za CORS iz WebConfig klase
                .cors().and()

                // umetni custom filter TokenAuthenticationFilter kako bi se vrsila provera JWT tokena umesto cistih korisnickog imena i lozinke (koje radi BasicAuthenticationFilter)
                .addFilterBefore(new TokenAuthenticationFilter(tokenUtils, jwtPersonService),
                        BasicAuthenticationFilter.class);
        http.csrf().disable();

        return http.build();

    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }

    @Bean
    public WebSecurityCustomizer webSecurityCustomizer(){

        return web -> web.ignoring().antMatchers("/api/auth/login", "/v3/api-docs/**");

    }
}

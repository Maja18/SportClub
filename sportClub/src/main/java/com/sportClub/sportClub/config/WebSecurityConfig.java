package com.sportClub.sportClub.config;

import com.sportClub.sportClub.repository.AuthorityRepository;
import com.sportClub.sportClub.repository.PersonRepository;
import com.sportClub.sportClub.security.TokenUtils;
import com.sportClub.sportClub.security.auth.RestAuthenticationEntryPoint;
import com.sportClub.sportClub.security.auth.TokenAuthenticationFilter;
import com.sportClub.sportClub.service.CustomUserDetailsService;
import com.sportClub.sportClub.service.interface_service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.BeanIds;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)

//@EnableGlobalMethodSecurity(securedEnabled = true)
public class WebSecurityConfig {
    @Autowired
    private CustomUserDetailsService jwtPersonService;


    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http,TokenUtils tokenUtils,RestAuthenticationEntryPoint restAuthenticationEntryPoint,CustomUserDetailsService jwtUserDetailsService,PersonRepository personRepository,AuthorityRepository authorityRepository) throws Exception {

        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
                .exceptionHandling().authenticationEntryPoint(restAuthenticationEntryPoint).and()
                .cors().and()

                .authorizeRequests()
                .antMatchers("/api/auth/authority").hasAnyAuthority("ROLE_VIEWER", "ROLE_EDITOR")
                .antMatchers("/swagger-ui/**", "/javainuse-openapi/**").permitAll()
                .antMatchers("/api/**").permitAll()

                .anyRequest().authenticated().and().addFilterBefore(new TokenAuthenticationFilter(tokenUtils, jwtUserDetailsService, personRepository, authorityRepository), BasicAuthenticationFilter.class);
        http.csrf().disable();

        return http.build();

    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }

    @Bean
    public WebSecurityCustomizer webSecurityCustomizer(){

        return web -> web.ignoring().antMatchers("/api/auth/register","/api/auth/login","/v3/api-docs/**");

    }
}

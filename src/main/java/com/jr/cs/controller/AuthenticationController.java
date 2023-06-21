package com.jr.cs.controller;

import com.jr.cs.config.JwtUtils;
import com.jr.cs.dao.UserDAO;
import com.jr.cs.dto.AuthenticationRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {
    private final AuthenticationManager authenticationManager;
    private final UserDAO userDAO;
    private final JwtUtils jwtUtils;
    @PostMapping("/authenticate")
    public ResponseEntity<String> authenticate(
            @RequestBody AuthenticationRequest request
    ) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
        );

        final UserDetails userDetails = userDAO.findUserByEmail(request.getEmail());
        if (userDetails != null) {
            return ResponseEntity.ok(jwtUtils.generateToken(userDetails));
        } else {
            return ResponseEntity.status(400).body("Some error has occurred!");
        }
    }
}

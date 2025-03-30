package com.example.namdapha_backend.Service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwt;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.util.Date;

@Service
public class JwtService {

    private static final String JWT_KEY = "secret" ;
    private final SecretKey signKey = Keys.secretKeyFor(SignatureAlgorithm.HS256) ;


    public String generateToken(String email){
        return Jwts.builder()
                .setSubject(email)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 1000*60*60))
                .signWith(signKey,SignatureAlgorithm.HS256)
                .compact();
    }

    public String getEmailFromToken(String token){
        Claims claims = Jwts.parserBuilder()
                .setSigningKey(signKey)
                .build()
                .parseClaimsJws(token)
                .getBody() ;

        return claims.getSubject() ;
    }

    public boolean isTokenValid(String token){
        try{
            Jwts.parserBuilder().setSigningKey(signKey).build().parseClaimsJws(token) ;
            return true ;
        }
        catch (Exception e){
            return false ;
        }
    }
}

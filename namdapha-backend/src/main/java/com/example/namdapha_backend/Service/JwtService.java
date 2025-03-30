//package com.example.namdapha_backend.Service;
//
//import io.jsonwebtoken.Claims;
//import io.jsonwebtoken.Jwt;
//import io.jsonwebtoken.Jwts;
//import io.jsonwebtoken.SignatureAlgorithm;
//import org.springframework.stereotype.Service;
//
//import java.util.Date;
//
//@Service
//public class JwtService {
//
//    private static final String JWT_KEY = "secret" ;
//
//    public String generateToken(String email){
//        return Jwts.builder()
//                .setSubject(email)
//                .setIssuedAt(new Date())
//                .setExpiration(new Date(System.currentTimeMillis() + 1000*60*60))
//                .signWith(SignatureAlgorithm.HS256,JWT_KEY)
//                .compact();
//    }
//
//    public String getEmailFromToken(String token){
//        Claims claims = Jwts.parser()
//                .setSigningKey(JWT_KEY)
//                .parseClaimsJws(token)
//                .getBody() ;
//
//        return claims.getSubject() ;
//    }
//
//    public boolean isTokenValid(String token){
//        try{
//            Jwts.parser().setSigningKey(JWT_KEY).parseClaimsJws(token) ;
//            return true ;
//        }
//        catch (Exception e){
//            return false ;
//        }
//    }
//}

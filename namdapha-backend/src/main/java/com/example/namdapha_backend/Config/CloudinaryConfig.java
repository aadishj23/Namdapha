package com.example.namdapha_backend.Config;

import com.cloudinary.Cloudinary;
import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CloudinaryConfig {

    @Bean
    public Cloudinary cloudinary(){
        Dotenv dotenv = Dotenv.load() ;
        Cloudinary cloudinaryUrl = new Cloudinary(dotenv.get("CLOUDINARY_URL"));

        return cloudinaryUrl ;
    }
}

package com.example.namdapha_backend.Config;

import com.cloudinary.Cloudinary;
import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CloudinaryConfig {

    @Bean
    public Cloudinary cloudinary(){
        // Try to load from .env file (for local development), ignore if missing
        Dotenv dotenv = Dotenv.configure()
                .ignoreIfMissing()
                .load();
        
        // Get CLOUDINARY_URL from .env file or system environment variable
        String cloudinaryUrl = dotenv.get("CLOUDINARY_URL", System.getenv("CLOUDINARY_URL"));
        
        if (cloudinaryUrl == null || cloudinaryUrl.isEmpty()) {
            throw new IllegalStateException("CLOUDINARY_URL environment variable is not set");
        }
        
        Cloudinary cloudinary = new Cloudinary(cloudinaryUrl);
        return cloudinary;
    }
}

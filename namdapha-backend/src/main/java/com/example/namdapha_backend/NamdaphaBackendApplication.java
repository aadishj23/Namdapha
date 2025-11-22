package com.example.namdapha_backend;

import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {"com.example.namdapha_backend"})

public class NamdaphaBackendApplication {

	public static void main(String[] args) {
		// Load .env file and set system properties
		Dotenv dotenv = Dotenv.configure()
				.ignoreIfMissing()
				.load();
		
		// Set environment variables for Spring Boot to use
		if (dotenv.get("PORT") != null) {
			System.setProperty("PORT", dotenv.get("PORT"));
		}
		if (dotenv.get("MONGODB_URI") != null) {
			System.setProperty("MONGODB_URI", dotenv.get("MONGODB_URI"));
		}
		if (dotenv.get("MONGODB_DATABASE") != null) {
			System.setProperty("MONGODB_DATABASE", dotenv.get("MONGODB_DATABASE"));
		}
		if (dotenv.get("MAIL_HOST") != null) {
			System.setProperty("MAIL_HOST", dotenv.get("MAIL_HOST"));
		}
		if (dotenv.get("MAIL_PORT") != null) {
			System.setProperty("MAIL_PORT", dotenv.get("MAIL_PORT"));
		}
		if (dotenv.get("MAIL_USERNAME") != null) {
			System.setProperty("MAIL_USERNAME", dotenv.get("MAIL_USERNAME"));
		}
		if (dotenv.get("MAIL_PASSWORD") != null) {
			System.setProperty("MAIL_PASSWORD", dotenv.get("MAIL_PASSWORD"));
		}
		if (dotenv.get("ADMIN_EMAIL") != null) {
			System.setProperty("ADMIN_EMAIL", dotenv.get("ADMIN_EMAIL"));
		}
		
		SpringApplication.run(NamdaphaBackendApplication.class, args);

	}

}

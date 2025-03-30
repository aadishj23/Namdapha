package com.example.namdapha_backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
@ComponentScan(basePackages = {"com.example.namdapha_backend"})

public class NamdaphaBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(NamdaphaBackendApplication.class, args);

	}

}

package com.example.namdapha_backend.Model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Document(collection = "ContactUs")
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ContactUs {

    @Id
    private String id ;

    private String name ;
    private String email ;
    private String message ;
    private LocalDateTime submittedAt = LocalDateTime.now() ;


}

package com.example.namdapha_backend.Model;


import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="Species")
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Species {
    @Id
    private String id ;
    private String date ;
    private String title ;
    private String body ;
    private Image image ;
}

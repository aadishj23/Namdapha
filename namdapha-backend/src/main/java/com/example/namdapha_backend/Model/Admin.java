package com.example.namdapha_backend.Model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "admins")
@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Admin {
    @Id
    private String id ;

    private String email ;

    private String password ;
}

package com.example.namdapha_backend.Model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="Gallery")
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Gallery {
    @Id
    private String id ;
    private Image galleryImage ;
}

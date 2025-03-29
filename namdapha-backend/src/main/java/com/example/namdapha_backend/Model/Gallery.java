package com.example.namdapha_backend.Model;

import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="Gallery")
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Gallery {
    private Image galleryImage ;
}

package com.example.namdapha_backend.Model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.time.LocalDateTime;

@Builder
@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Document(collection="images")

public class Image {
   public Image(String imageURL, String publicID, String uploadedBy, LocalDateTime uploadedAt) {
       this.imageURL = imageURL;
       this.publicID = publicID;
       this.uploadedBy = uploadedBy;
       this.uploadedAt = uploadedAt;
   }


   @Id
   private String id ;
   private String imageURL ;
   private String publicID ;
   private String uploadedBy ;

   private LocalDateTime uploadedAt ;
}


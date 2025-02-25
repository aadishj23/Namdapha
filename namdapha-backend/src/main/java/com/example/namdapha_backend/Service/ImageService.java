package com.example.namdapha_backend.Service;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import com.example.namdapha_backend.Model.Image;
import com.example.namdapha_backend.Repository.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

@Service
public class ImageService {

   @Autowired
   private Cloudinary cloudinary ;

   @Autowired
   private ImageRepository imageRepository ;

   public Image uploadImage(MultipartFile file,String uploadedBy) throws IOException {
       Map uploadResult = cloudinary.uploader().upload(file.getBytes(),
                           ObjectUtils.asMap("folder","gallery")) ;

       Image image = Image.builder()
               .imageURL(uploadResult.get("secure_url").toString())
               .publicID(uploadResult.get("public_id").toString())
               .uploadedBy(uploadedBy)
               .uploadedAt(LocalDateTime.now())
               .build();

       return imageRepository.save(image) ;
   }

   public void deleteImage(String imageId) throws IOException{
       Image image = imageRepository.findById(imageId).orElseThrow(()-> new RuntimeException("Image not available") );

       cloudinary.uploader().destroy(image.getPublicID(),ObjectUtils.emptyMap())  ;
       imageRepository.deleteById(imageId);

   }

   public List<Image> getImages(){
       return imageRepository.findAll() ;
   }
}

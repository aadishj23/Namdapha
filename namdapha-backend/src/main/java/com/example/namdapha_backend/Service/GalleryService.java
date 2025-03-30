package com.example.namdapha_backend.Service;

import com.example.namdapha_backend.Model.Gallery;
import com.example.namdapha_backend.Model.Image;
import com.example.namdapha_backend.Repository.GalleryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public class GalleryService {

    @Autowired
    private ImageService imageService ;

    @Autowired
    private GalleryRepository galleryRepository ;

    public Gallery saveToGallery(MultipartFile file, String uploadedBy) throws IOException {
        String folderName = "gallery";
            Image uploadedImage = imageService.uploadImage(file,uploadedBy,"gallery") ;

        Gallery galleryImage = Gallery.builder()
                        .galleryImage(uploadedImage)
                        .build();

       return galleryRepository.save(galleryImage) ;
    }

    public void deleteFromGallery(String imageId) throws IOException{
        Gallery galleryImage = galleryRepository.findById(imageId).orElseThrow(()-> new RuntimeException( "Gallery Image not available")) ;

        imageService.deleteImage(galleryImage.getGalleryImage().getId());
        galleryRepository.deleteById(imageId);
    }

    public List<Gallery> getAllGalleryImages(){

        return galleryRepository.findAll() ;
    }

}

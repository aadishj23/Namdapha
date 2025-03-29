package com.example.namdapha_backend.Controller;

import com.example.namdapha_backend.Model.Gallery;
import com.example.namdapha_backend.Service.GalleryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/gallery")
public class GalleryController {

    @Autowired
    private GalleryService galleryService ;

    @PostMapping("/add")
    public ResponseEntity<Gallery> addImageToGallery (@RequestParam("file")MultipartFile file,@RequestParam(value = "uploadedBy", defaultValue = "Anonymous") String uploadedBy){
        try{
            Gallery gallery = galleryService.saveToGallery(file,uploadedBy) ;
            return ResponseEntity.ok(gallery) ;
        }
        catch(IOException e){
            return ResponseEntity.internalServerError().body(null) ;
        }
    }

    @DeleteMapping("/delete/{galleryId}")
    public ResponseEntity<String> deleteImageFromGallery(@PathVariable String galleryId) {
        try {
            galleryService.deleteFromGallery(galleryId);
            return ResponseEntity.ok("Image removed from gallery successfully.");
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (IOException e) {
            return ResponseEntity.internalServerError().body("Failed to delete the image from gallery.");
        }
    }

    @GetMapping("/all")
    public ResponseEntity<List<Gallery>> getAllGalleryImages() {
        List<Gallery> allGalleryImages = galleryService.getAllGalleryImages();
        return ResponseEntity.ok(allGalleryImages);
    }



}

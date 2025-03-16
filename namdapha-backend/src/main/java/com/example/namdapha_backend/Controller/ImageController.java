//package com.example.namdapha_backend.Controller;
//
//import com.example.namdapha_backend.Model.Image;
//import com.example.namdapha_backend.Service.ImageService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//import org.springframework.web.multipart.MultipartFile;
//
//import java.io.IOException;
//import java.util.List;
//
//@RestController
//@RequestMapping("/image")
//public class ImageController {
//    @Autowired
//    private ImageService imageService ;
//
//    @PostMapping("/upload")
//    public ResponseEntity<Image> uploadImage(@RequestParam("file")MultipartFile file,
//                                             @RequestParam(value = "uploadedBy",defaultValue = "Anonymous")String uploadedBy){
//        try{
//            Image uploadedImage = imageService.uploadImage(file,uploadedBy);
//            return ResponseEntity.ok(uploadedImage) ;
//        }
//        catch(IOException e){
//            return ResponseEntity.internalServerError().build() ;
//        }
//    }
//
//    @DeleteMapping("/delete/{id}")
//    public ResponseEntity<String> deleteImage(@PathVariable String id){
//        try{
//            imageService.deleteImage(id);
//            return ResponseEntity.ok("Image deleted successfully") ;
//
//        } catch (IOException e) {
//            return ResponseEntity.internalServerError().body("error deleting image") ;
//        }
//    }
//
//    @GetMapping("/fetchImages")
//    public ResponseEntity<List<Image>> fetchAllImages(){
//        List<Image> allImages = imageService.getImages() ;
//        return ResponseEntity.ok(allImages) ;
//    }
//
//
//}

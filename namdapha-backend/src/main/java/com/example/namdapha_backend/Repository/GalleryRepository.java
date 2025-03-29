package com.example.namdapha_backend.Repository;

import com.example.namdapha_backend.Model.Gallery;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GalleryRepository extends MongoRepository <Gallery, String>{
}

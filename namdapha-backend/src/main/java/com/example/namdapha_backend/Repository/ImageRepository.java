package com.example.namdapha_backend.Repository;

import com.example.namdapha_backend.Model.Image;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImageRepository extends MongoRepository<Image,String> {

}

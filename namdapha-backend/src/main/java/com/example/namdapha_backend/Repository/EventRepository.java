package com.example.namdapha_backend.Repository;

import com.example.namdapha_backend.Model.Event;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventRepository extends MongoRepository <Event,String>{
}

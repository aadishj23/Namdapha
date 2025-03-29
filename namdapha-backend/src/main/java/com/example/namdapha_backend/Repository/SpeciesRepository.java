package com.example.namdapha_backend.Repository;

import com.example.namdapha_backend.Model.Species;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SpeciesRepository extends MongoRepository<Species,String> {
}

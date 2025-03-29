package com.example.namdapha_backend.Repository;

import com.example.namdapha_backend.Model.News;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NewsRepository extends MongoRepository<News,String> {
}

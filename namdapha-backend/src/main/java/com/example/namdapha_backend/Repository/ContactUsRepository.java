package com.example.namdapha_backend.Repository;

import com.example.namdapha_backend.Model.ContactUs;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactUsRepository extends MongoRepository<ContactUs,String> {
}

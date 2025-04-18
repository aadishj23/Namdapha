package com.example.namdapha_backend.Service;

import com.example.namdapha_backend.Model.ContactUs;
import com.example.namdapha_backend.Repository.ContactUsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContactUsService {

    @Autowired
    private ContactUsRepository contactUsRepository ;

    public ContactUs saveMessage(ContactUs contactUs){
        return contactUsRepository.save(contactUs) ;
    }

    public List<ContactUs> getAllMessages(){
        return contactUsRepository.findAll() ;
    }

    public ContactUs deleteMessage(String id){
        ContactUs contactUs = contactUsRepository.findById(id).orElseThrow(()-> new RuntimeException("Contact Us not found with :"+id)) ;
        contactUsRepository.deleteById(id);
        return contactUs ;
    }

}

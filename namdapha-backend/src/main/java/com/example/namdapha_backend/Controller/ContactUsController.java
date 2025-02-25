package com.example.namdapha_backend.Controller;

import com.example.namdapha_backend.Model.ContactUs;
import com.example.namdapha_backend.Service.ContactUsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/contactus")
public class ContactUsController {

    @Autowired
    private ContactUsService contactUsService ;

    @PostMapping("/submit")
    public ResponseEntity<ContactUs> submitMessage(@RequestBody ContactUs contactUs){
        System.out.println("Received data :" + contactUs.getMessage());


        ContactUs message = contactUsService.saveMessage(contactUs) ;
        return ResponseEntity.ok(message) ;
    }

    @GetMapping("/getMessages")
    public ResponseEntity<List<ContactUs>> getMessages(){
        List<ContactUs> allMessages = contactUsService.getAllMessages();
        return ResponseEntity.ok(allMessages) ;
    }
}

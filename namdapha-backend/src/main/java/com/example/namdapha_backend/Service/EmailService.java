//package com.example.namdapha_backend.Service;
//
//import jakarta.mail.MessagingException;
//import jakarta.mail.internet.MimeMessage;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.mail.javamail.JavaMailSender;
//import org.springframework.mail.javamail.MimeMessageHelper;
//import org.springframework.stereotype.Service;
//
//@Service
//public class EmailService {
//
//    @Autowired
//    private JavaMailSender javaMailSender ;
//
//    public void sendOTP(String otp) throws MessagingException{
//        String to = "parthnepalia032gmail.com" ;
//        MimeMessage mimeMessage = javaMailSender.createMimeMessage() ;
//        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage,true) ;
//        helper.setTo(to); ;
//        helper.setSubject("Password reset OTP");
//        helper.setText("Your OTP is: "+ otp);
//        javaMailSender.send(mimeMessage) ;
//    }
//}

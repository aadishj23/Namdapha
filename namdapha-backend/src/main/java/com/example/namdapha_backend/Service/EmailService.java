package com.example.namdapha_backend.Service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender javaMailSender ;

    @Value("${ADMIN_EMAIL}")
    private String adminEmail;

    public void sendOTP(String otp) throws MessagingException{
        System.out.println("sendOTP entered Emailservice");
        String to = adminEmail;
        SimpleMailMessage message = new SimpleMailMessage();

        message.setTo(to); ;
        message.setSubject("Password reset OTP");
        message.setText("Your OTP is: "+ otp);
        System.out.println("email service before sending mail");
        javaMailSender.send(message) ;
        System.out.println("email service after sending mail");
    }
}

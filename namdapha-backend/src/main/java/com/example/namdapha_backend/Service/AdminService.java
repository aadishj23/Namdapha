//package com.example.namdapha_backend.Service;
//
//import com.example.namdapha_backend.Model.Admin;
//import com.example.namdapha_backend.Repository.AdminRepository;
//import jakarta.mail.MessagingException;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.stereotype.Service;
//
//import java.util.Optional;
//import java.util.Random;
//
//@Service
//public class AdminService {
//
//    @Autowired
//    private AdminRepository adminRepository ;
//
//    @Autowired
//    private JwtService jwtService ;
//
//    @Autowired
//    private EmailService emailService ;
//
//    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder() ;
//    private String otpCode ;
//
//    public String login(String email,String password){
//        if (!email.equals("parthnepalia03@gmail.com")) {
//            throw new RuntimeException("Login is allowed only for the admin account.");
//        }
//
//
//        Optional<Admin> adminOpt = adminRepository.findByEmail(email) ;
//        if(adminOpt.isPresent()){
//            Admin admin = adminOpt.get() ;
//            if(passwordEncoder.matches(password,admin.getPassword())){
//                return jwtService.generateToken(email);
//            }
//        }
//        throw new RuntimeException("Invalid Credentials");
//    }
//
//    public void sendPasswordResetOTP()throws MessagingException {
//
//
//        this.otpCode = String.valueOf(new Random().nextInt(999999)) ;
//        emailService.sendOTP(otpCode);
//    }
//
//    public void resetPassword(String email,String otp,String newPassword){
//        if (!email.equals("parthnepalia03@gmail.com")) {
//            throw new RuntimeException("Password reset is allowed only for the admin email address.");
//        }
//
//
//        if(otp.equals(this.otpCode)){
//            Admin admin = adminRepository.findByEmail(email).orElseThrow(()->new RuntimeException("No admin found with: "+email));
//            admin.setPassword(passwordEncoder.encode(newPassword));
//            adminRepository.save(admin) ;
//        }
//        else{
//            throw new RuntimeException("Invalid OTP") ;
//        }
//    }
//
//
//}

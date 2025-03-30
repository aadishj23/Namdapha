//package com.example.namdapha_backend.Controller;
//
//import com.example.namdapha_backend.Service.AdminService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//@RequestMapping("/auth")
//public class AuthController {
//    @Autowired
//    private AdminService adminService;
//
//    @PostMapping("/login")
//    public ResponseEntity<String> login(@RequestParam String email, @RequestParam String password) {
//        return ResponseEntity.ok(adminService.login(email, password));
//    }
//
//    @PostMapping("/send-otp")
//    public ResponseEntity<?> sendOtp() {
//        try {
//            adminService.sendPasswordResetOTP();
//            return ResponseEntity.ok("OTP sent successfully!");
//        } catch (Exception e) {
//            return ResponseEntity.badRequest().body(e.getMessage());
//        }
//    }
//
//    @PostMapping("/reset-password")
//    public ResponseEntity<?> resetPassword(@RequestParam String email, @RequestParam String otp,
//                                           @RequestParam String newPassword) {
//        try {
//            adminService.resetPassword(email, otp, newPassword);
//            return ResponseEntity.ok("Password reset successful!");
//        } catch (Exception e) {
//            return ResponseEntity.badRequest().body(e.getMessage());
//        }
//    }
//}
//

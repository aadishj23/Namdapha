package com.example.namdapha_backend.Controller;

import com.example.namdapha_backend.Service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {
    @Autowired
    private AdminService adminService;

//    @PostMapping("/sign-in")
//    public ResponseEntity<?> registerAdmin(@RequestBody String email,String password)

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestParam String email,@RequestParam String password) {
        System.out.println("login started");
        System.out.println("email captured: "+email);
        String result = adminService.login(email, password);
        System.out.println("login completed");
        return ResponseEntity.ok(result);
    }

    @PostMapping("/send-otp")
    public ResponseEntity<?> sendOtp() {
        try {
            System.out.println("entered send-otp controller");
            adminService.sendPasswordResetOTP();
            System.out.println("returned from adminservice");
            return ResponseEntity.ok("OTP sent successfully!");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/reset-password")
    public ResponseEntity<?> resetPassword(@RequestParam String email, @RequestParam String otp,
                                           @RequestParam String newPassword) {
        try {
            adminService.resetPassword(email, otp, newPassword);
            return ResponseEntity.ok("Password reset successful!");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}


package com.example.demo;

import org.springframework.web.bind.annotation.*;

@RestController
public class CalculatorController {
    @GetMapping("/add")
    public int add(@RequestParam int a, @RequestParam int b) {
        return a + b;
    }

    @GetMapping("/hello")
    public String hello() {
        return "Hello Spring Boot";
    }
}

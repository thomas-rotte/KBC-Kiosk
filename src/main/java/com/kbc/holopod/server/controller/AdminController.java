package com.kbc.holopod.server.controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

/**
 * Created by thomasrotte on 10/04/2024.
 */
@RestController
@RequestMapping("/")
public class AdminController {


        @GetMapping("/hello")
        public String sayHello() {
            return "Hello, World!";
        }




}

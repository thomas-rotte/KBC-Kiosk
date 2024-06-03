package com.kbc.holopod.server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

/**
 * Created by thomasrotte on 10/04/2024.
 */
@SpringBootApplication
@ComponentScan(basePackages = {"com.kbc.holopod.server.controller"})
public class HolopodServer {

    public static void main(String[] args) {
        SpringApplication.run(HolopodServer.class, args);

    }


}

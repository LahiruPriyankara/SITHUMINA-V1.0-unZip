package com.lhu.inq;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class BillerInfoApplication {

	public static void main(String[] args) {
		SpringApplication.run(BillerInfoApplication.class, args);
	}

}

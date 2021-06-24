package com.lhu.catInfo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/sithumina-auth")
public class SithuminaAuthController {
	
	@Autowired
	private RestTemplate restTemplate;

	@RequestMapping("/uers")
	public Object[] getCategories() {
		System.out.println("/uers : EUREKA");
		Object[] respose = {};
		try {	
			respose = restTemplate.getForObject("http://sithumina-auth/uers",Object[].class);
			System.out.println("respose " +respose);
			
		}catch (Exception e) {
			System.out.println("FAILED TO GET USERS | EUREKA..");
		}		
		return respose;
	}
	
	@RequestMapping("/uer-register/{userName}/{userPassword}/{userType}")
	public int userRegister(@PathVariable("userName") String userName,@PathVariable("userPassword") String userPassword,@PathVariable("userType") String userType) {	
		System.out.println("EUREKA : /uer-register/{userName}/{userPassword}/{userType}");
		int respose = 0;
		try {
			respose = restTemplate.getForObject("http://sithumina-auth//uer-register/"+userName+"/"+userPassword+"/"+userType,Integer.class);
			System.out.println("respose " +respose);
			
		}catch (Exception e) {
			System.out.println("FAILED TO REGISTER USER | EUREKA..");
		}		
		return respose;
	}
	
	@RequestMapping("/uer-login/{userName}/{userPassword}")
	public Object userLogin(@PathVariable("userName") String userName,@PathVariable("userPassword") String userPassword) {	
		System.out.println("EUREKA : /uers");
		Object respose = new Object();
		try {	
			respose = restTemplate.getForObject("http://sithumina-auth/uer-login/"+userName+"/"+userPassword,Object.class);
			System.out.println("respose " +respose);
			
		}catch (Exception e) {
			System.out.println("FAILED TO USER LOG IN | EUREKA..");
		}		
		return respose;
	}


}

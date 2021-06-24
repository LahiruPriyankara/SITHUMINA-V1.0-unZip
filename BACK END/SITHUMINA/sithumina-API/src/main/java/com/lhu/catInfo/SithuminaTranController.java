package com.lhu.catInfo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/sithumina-transaction")
public class SithuminaTranController {
	
	@Autowired
	private RestTemplate restTemplate;

	@RequestMapping("/all-trandata")
	public Object[] getCategories() {
		System.out.println("/all-trandata");
		Object[] respose = {};
		try {	
			respose = restTemplate.getForObject("http://sithumina-transaction/all-trandata",Object[].class);
			System.out.println("respose " +respose);
			
		}catch (Exception e) {
			System.out.println("FAILED TO GET TRANSACTION | EUREKA..");
		}		
		return respose;
	}

	@RequestMapping("/add-transaction/{tranAmount}/{cartId}")
	public int getCategory(@PathVariable("tranAmount") String tranAmount, @PathVariable("cartId") int cartId) {
		System.out.println("EUREKA : /add-transaction/{tranAmount}/{cartId}");
		int respose = 0;
		try {
			respose = restTemplate.getForObject("http://sithumina-transaction/add-transaction/"+tranAmount+"/"+cartId,Integer.class);
			System.out.println("respose " +respose);
			
		}catch (Exception e) {
			System.out.println("FAILED TO ADD TRANSACTION | EUREKA..");
		}		
		return respose;
	}


}

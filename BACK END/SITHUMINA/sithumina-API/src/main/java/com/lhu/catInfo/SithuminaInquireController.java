package com.lhu.catInfo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/sithumina-inquiry")
public class SithuminaInquireController {
	
	@Autowired
	private RestTemplate restTemplate;

	@RequestMapping("/all-inquiry")
	public Object[] getAllInq() {
		System.out.println("/all-inquiry : EUREKA");
		Object[] respose = {};
		try {	
			respose = restTemplate.getForObject("http://sithumina-inquiry/all-inquiry",Object[].class);
			System.out.println("respose " +respose);
			
		}catch (Exception e) {
			System.out.println("FAILED TO GET INQUIRIES | EUREKA..");
		}		
		return respose;
	}
	
	@RequestMapping("/add-inquiry/{inqDesc}/{userId}")
	public int createNewInq(@PathVariable("inqDesc") String inqDesc,@PathVariable("userId") int userId) {	
		System.out.println("EUREKA : /add-inquiry/{inqDesc}/{userId}");
		int respose = 0;
		try {
			respose = restTemplate.getForObject("http://sithumina-inquiry/add-inquiry/"+inqDesc+"/"+userId+"",Integer.class);
			System.out.println("respose " +respose);
			
		}catch (Exception e) {
			System.out.println("FAILED TO CREATE NEW INQUIRY | EUREKA..");
		}		
		return respose;
	}
	

}

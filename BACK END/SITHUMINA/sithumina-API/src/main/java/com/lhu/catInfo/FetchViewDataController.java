package com.lhu.catInfo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/sithumina-fetch-data")
public class FetchViewDataController {
	@Autowired
	private RestTemplate restTemplate;

	@RequestMapping("/getCategories")
	public Object[] getCategories() {
		System.out.println("EUREKA : /getCategories");
		Object[] respose = {};
		try {	
			respose = restTemplate.getForObject("http://sithumina-fetch-data/getCategories",Object[].class);
			System.out.println("respose " +respose);
			
		}catch (Exception e) {
			System.out.println("FAILED TO GET CATEGORIES | EUREKA..");
		}		
		return respose;
	}

	@RequestMapping("/getBrands")
	public Object[] getBrands() {
		System.out.println("EUREKA : /getBrands");
		Object[] respose = {};
		try {	
			respose = restTemplate.getForObject("http://sithumina-fetch-data/getBrands",Object[].class);
			System.out.println("respose " +respose);
			
		}catch (Exception e) {
			System.out.println("FAILED TO GET BRANCHES | EUREKA..");
		}		
		return respose;
	}
	
	@RequestMapping("/getBranches")
	public Object[] getBranches() {
		System.out.println("EUREKA : /getBranches");
		Object[] respose = {};
		try {	
			respose = restTemplate.getForObject("http://sithumina-fetch-data/getBranches",Object[].class);
			System.out.println("respose " +respose);
			
		}catch (Exception e) {
			System.out.println("FAILED TO GET BRANCHES | EUREKA..");
		}		
		return respose;
	}
	
	@RequestMapping("/getItems")
	//@Consumes({MediaType.APPLICATION_JSON})
	public Object[] getItems() {
		System.out.println("EUREKA : /getItems");
		Object[] respose = {};
		try {	
			respose = restTemplate.getForObject("http://sithumina-fetch-data/getItems",Object[].class);
			System.out.println("respose " +respose);
			
		}catch (Exception e) {
			System.out.println("FAILED TO GET ITEMS | EUREKA..");
		}		
		return respose;
	}
	
	@RequestMapping("/getItemsByCategory/{categoryId}")
	public Object[] getItemByCategory(@PathVariable("categoryId") int categoryId) {
		System.out.println("EUREKA : /getItemsByCategory/{categoryId}");
		Object[] respose = {};
		try {	
			respose = restTemplate.getForObject("http://sithumina-fetch-data/getItemsByCategory/"+categoryId,Object[].class);
			System.out.println("respose " +respose);
			
		}catch (Exception e) {
			System.out.println("FAILED TO GET BRANDS | EUREKA..");
		}		
		return respose;
	}
	
	@RequestMapping("/getItemsByBrand/{brandId}")
	public Object[] getItemByBrand(@PathVariable("brandId") int brandId) {
		System.out.println("EUREKA : /getItemsByBrand/{brandId}");
		Object[] respose = {};
		try {	
			respose = restTemplate.getForObject("http://sithumina-fetch-data/getItemsByBrand/"+brandId,Object[].class);
			System.out.println("respose " +respose);
			
		}catch (Exception e) {
			System.out.println("FAILED TO GET ITEM BY BRANDS | EUREKA..");
		}		
		return respose;
	}
	
	@RequestMapping("/getItemsByBranch/{branchId}")
	public Object[] getItemByBranch(@PathVariable("branchId") int branchId) {
		System.out.println("EUREKA : /getItemsByBrand/{brandId}");
		Object[] respose = {};
		try {	
			respose = restTemplate.getForObject("http://sithumina-fetch-data/getItemsByBranch/"+branchId,Object[].class);
			System.out.println("respose " +respose);
			
		}catch (Exception e) {
			System.out.println("FAILED TO GET ITEM BY BRANCHES | EUREKA..");
		}		
		return respose;
	}

	@RequestMapping("/getItem/{itemId}")
	public Object getItemByItemId(@PathVariable("itemId") int itemId) {
		System.out.println("EUREKA : /getItem/{itemId}");
		Object respose = new Object();
		try {	
			respose = restTemplate.getForObject("http://sithumina-fetch-data/getItem/"+itemId,Object.class);
			System.out.println("respose " +respose);
			
		}catch (Exception e) {
			System.out.println("FAILED TO GET ITEM BY ITEM_ID | EUREKA..");
		}		
		return respose;
	}


}

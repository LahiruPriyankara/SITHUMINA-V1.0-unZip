package com.lhu.fetchdata;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lhu.fetchdata.model.Branch;
import com.lhu.fetchdata.model.Brand;
import com.lhu.fetchdata.model.Category;
import com.lhu.fetchdata.model.Item;
import com.lhu.fetchdata.repository.BranchDao;
import com.lhu.fetchdata.repository.BrandDao;
import com.lhu.fetchdata.repository.CategoryDao;
import com.lhu.fetchdata.repository.ItemDao;


@RestController
//@RequestMapping("/fetchData")
public class FetchViewDataController {
	
	@Autowired
	CategoryDao categoryDao; 
	
	@Autowired
	BrandDao brandDao;
	
	@Autowired
	BranchDao branchDao;
	
	@Autowired
	ItemDao itemDao; 
	
	@RequestMapping("/getCategories")
	public List<Category> getCategories() {
		System.out.println("/getCategories");
		List<Category> list = new ArrayList<>();
		try {
			list = categoryDao.findAll();			
		}catch (Exception e) {
			System.out.println("ERROR | "+e);
		}
		return list;		
	}
	
	@RequestMapping("/getBrands")
	public List<Brand> getBrands() {
		System.out.println("/getBrands");
		List<Brand> list = new ArrayList<>();
		try {
			list = brandDao.findAll();		
		}catch (Exception e) {
			System.out.println("ERROR | "+e);
		}
		return list;
	}
	
	@RequestMapping("/getBranches")
	public List<Branch> getBranches() {
		System.out.println("/getBranches");
		List<Branch> list = new ArrayList<>();
		try {
			list = branchDao.findAll();		
		}catch (Exception e) {
			System.out.println("ERROR | "+e);
		}
		return list;
	}
	
	@RequestMapping("/getItems")
	public List<Item> getItems() {
		System.out.println("/getItems");
		List<Item> list = new ArrayList<>();
		try {
			list = itemDao.findAll();		
		}catch (Exception e) {
			System.out.println("ERROR | "+e);
		}
		return list;
	}
	
	@RequestMapping("/getItemsByCategory/{categoryId}")
	public List<Item> getItemByCategory(@PathVariable("categoryId") int categoryId) {
		System.out.println("/getItemsByCategory/{categoryId}");
		List<Item> list = new ArrayList<>();
		try {
			list = itemDao.findByCategory_id(categoryId);		
		}catch (Exception e) {
			System.out.println("ERROR | "+e);
		}
		return list;
	}
	@RequestMapping("/getItemsByBrand/{brandId}")
	public List<Item> getItemByBrand(@PathVariable("brandId") int brandId) {
		System.out.println("getItemsByBrand/{brandId}");
		List<Item> list = new ArrayList<>();
		try {
			list = itemDao.findByBrand_id(brandId);		
		}catch (Exception e) {
			System.out.println("ERROR | "+e);
		}
		return list;
	}
	
	@RequestMapping("/getItemsByBranch/{branchId}")
	public List<Item> getItemByBranch(@PathVariable("branchId") int branchId) {
		System.out.println("/getItemsByBranch/{branchId}");
		List<Item> list = new ArrayList<>();
		try {
			list = itemDao.findByBranch_id(branchId);		
		}catch (Exception e) {
			System.out.println("ERROR | "+e);
		}
		return list;
	}
	

	@RequestMapping("/getItem/{itemId}")
	public Item getItemByItemId(@PathVariable("itemId") int itemId) {
		System.out.println("/getItem/{itemId}");
		Item item = new Item();
		try {
			 item = itemDao.findByItem_id(itemId);	
		}catch (Exception e) {
			System.out.println("ERROR | "+e);
		}
		return item;
	}

}

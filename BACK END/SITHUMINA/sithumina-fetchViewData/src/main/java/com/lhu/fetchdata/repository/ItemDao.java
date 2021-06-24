package com.lhu.fetchdata.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.repository.CrudRepository;
import org.springframework.data.jpa.repository.Query;

import com.lhu.fetchdata.model.Item;

public interface ItemDao extends JpaRepository<Item, Integer>{
	
	@Query("from Item where category_id = ?1")
	List<Item> findByCategory_id(int categoryId);
	
	@Query("from Item where brand_id = ?1")
	List<Item> findByBrand_id(int brandId);
	
	@Query("from Item where branch_id = ?1")
	List<Item> findByBranch_id(int branchId);
	
	@Query("from Item where item_id = ?1")
	Item findByItem_id(int ItemId);
	
	/*@Query("from Item where branch_id = ?1 and age = ?2")
	List<Item> findByAgeAndName(String name,int num);*/
}

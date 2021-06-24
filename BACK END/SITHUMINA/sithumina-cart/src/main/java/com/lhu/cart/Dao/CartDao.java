package com.lhu.cart.Dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.lhu.cart.model.Cart;

public interface CartDao extends JpaRepository<Cart, Integer>{
	
	@Query("from Cart where cart_owner_id = ?1 and cart_status = ?2")
	List<Cart> findByCart_owner_id(int userId,String status);
	
	/*List<Item> findByBrand_id(int brandId);
	List<Item> findByBranch_id(int branchId);
	Item findByItem_id(int ItemId);
	
	@Query("from Item where branch_id = ?1 and age = ?2")
	List<Item> findByAgeAndName(String name,int num);*/
}

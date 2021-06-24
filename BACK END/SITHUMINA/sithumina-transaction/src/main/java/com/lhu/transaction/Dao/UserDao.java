package com.lhu.transaction.Dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.lhu.transaction.model.Userdata;

public interface UserDao extends JpaRepository<Userdata, Integer>{
	@Query("from Userdata where user_name = ?1 and user_password = ?2")
	List<Userdata> userLogin(String UserName,String UserPassword);
	
	@Query("from Userdata where user_name = ?1")
	List<Userdata> getUserByUserName(String UserName);
}

package com.lhu.fetchdata.repository;

//import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.repository.CrudRepository;

import com.lhu.fetchdata.model.Category;

public interface CategoryDao extends JpaRepository<Category, Integer> {

	//List<Category> findAll();
}

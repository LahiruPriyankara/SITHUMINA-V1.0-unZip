package com.lhu.fetchdata.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lhu.fetchdata.model.Brand;

public interface BrandDao extends JpaRepository<Brand, Integer> {

}

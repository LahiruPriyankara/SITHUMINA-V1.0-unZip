package com.lhu.inq.Dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lhu.inq.model.Inquiry;

public interface InquiryDao extends JpaRepository<Inquiry, Integer>{
	
	

}

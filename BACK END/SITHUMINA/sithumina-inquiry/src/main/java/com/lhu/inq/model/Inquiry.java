package com.lhu.inq.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Inquiry {
	@Id
	int inquiry_id;
	String inquiry_desc;
	int user_id;
	public int getInquiry_id() {
		return inquiry_id;
	}
	public void setInquiry_id(int inquiry_id) {
		this.inquiry_id = inquiry_id;
	}
	public String getInquiry_desc() {
		return inquiry_desc;
	}
	public void setInquiry_desc(String inquiry_desc) {
		this.inquiry_desc = inquiry_desc;
	}
	public int getUser_id() {
		return user_id;
	}
	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
	
	
}

package com.lhu.cart;

import java.util.List;

public class BillerList {
	private String categoryId;
	private List<Biller> billerList;

	public String getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(String categoryId) {
		this.categoryId = categoryId;
	}

	public List<Biller> getBillerList() {
		return billerList;
	}

	public void setBillerList(List<Biller> billerList) {
		this.billerList = billerList;
	}

}

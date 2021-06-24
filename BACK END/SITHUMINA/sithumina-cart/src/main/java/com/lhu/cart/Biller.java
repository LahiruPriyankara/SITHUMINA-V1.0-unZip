package com.lhu.cart;

public class Biller {
	private String billerId;
	private String billerName;
	private String catID;

	public Biller() {
	}

	public Biller(String billerId, String billerName, String catID) {
		this.billerId = billerId;
		this.billerName = billerName;
		this.catID = catID;
	}

	public String getBillerId() {
		return billerId;
	}

	public void setBillerId(String billerId) {
		this.billerId = billerId;
	}

	public String getBillerName() {
		return billerName;
	}

	public void setBillerName(String billerName) {
		this.billerName = billerName;
	}

	public String getCatID() {
		return catID;
	}

	public void setCatID(String catID) {
		this.catID = catID;
	}

}

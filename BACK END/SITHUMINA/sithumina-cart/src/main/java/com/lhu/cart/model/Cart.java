package com.lhu.cart.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Cart {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int cart_id;
	@Column
	String cart_status;
	@Column
	int cart_owner_id;
	
	public int getCart_id() {
		return cart_id;
	}
	public void setCart_id(int cart_id) {
		this.cart_id = cart_id;
	}
	public String getCart_status() {
		return cart_status;
	}
	public void setCart_status(String cart_status) {
		this.cart_status = cart_status;
	}
	public int getCart_owner_id() {
		return cart_owner_id;
	}
	public void setCart_owner_id(int cart_owner_id) {
		this.cart_owner_id = cart_owner_id;
	}
	
	
}

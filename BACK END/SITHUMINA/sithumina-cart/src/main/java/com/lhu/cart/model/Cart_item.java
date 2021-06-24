package com.lhu.cart.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Cart_item {
	@Id
	int id;
	int cart_id;
	int item_id;
	int item_qty;
	int item_qty_price;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getCart_id() {
		return cart_id;
	}
	public void setCart_id(int cart_id) {
		this.cart_id = cart_id;
	}
	public int getItem_id() {
		return item_id;
	}
	public void setItem_id(int item_id) {
		this.item_id = item_id;
	}
	public int getItem_qty() {
		return item_qty;
	}
	public void setItem_qty(int item_qty) {
		this.item_qty = item_qty;
	}
	public int getItem_qty_price() {
		return item_qty_price;
	}
	public void setItem_qty_price(int item_qty_price) {
		this.item_qty_price = item_qty_price;
	}
	
	
	
	
}

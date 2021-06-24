package com.lhu.cart.Dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lhu.cart.model.Cart_item;

public interface CartItem extends JpaRepository<Cart_item, Integer>{

}

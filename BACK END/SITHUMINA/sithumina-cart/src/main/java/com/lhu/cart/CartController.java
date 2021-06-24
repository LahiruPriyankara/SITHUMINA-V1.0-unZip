package com.lhu.cart;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lhu.cart.Dao.CartDao;
import com.lhu.cart.model.Cart;

@RestController
//@RequestMapping("/billerInfo")
public class CartController {
	@Autowired
	CartDao cartDao;
	
	@RequestMapping("/all-carts")
    public List<Cart> getAllCarts() {	
		System.out.println("/all-carts");
		try {
			return cartDao.findAll();
		}catch (Exception e) {
			return new ArrayList<Cart>();
		}		
    }

	@RequestMapping("/user-cart/{userId}")
    public List<Cart> getFailOrPendingCartByUser(@PathVariable("userId") int userId) {	
		System.out.println("/user-cart");
		try {
			return cartDao.findByCart_owner_id(userId,"S");
		}catch (Exception e) {
			return new ArrayList<Cart>();
		}		
    }
	
	@RequestMapping("/cart-data")
    public String getCartData() {	
		System.out.println("aaaaaaaaaaaaaaaaaaaaaaaaa");
		return "hi";
    }
	
	@RequestMapping("/biller")
    public BillerList getBillers() {	
		BillerList billerList = new BillerList();
		billerList.setBillerList(getBillerList());
        return billerList;
    }
	
	@RequestMapping("/biller/{billerId}")
    public Biller getBiller(@PathVariable("billerId") String billerId) {
		List<Biller> billerList = getBillerList();
		for (Biller bller : billerList) {
			if (bller.getBillerId().equalsIgnoreCase(billerId)) {
				return bller;
			}
		}
        return new Biller();
    }
	
	public List<Biller> getBillerList() {
		List<Biller> billerList = new ArrayList<>();
		billerList.add(new Biller("01","Biller One","C100"));
		billerList.add(new Biller("02","Biller Two","C101"));
		return billerList;
	}

}

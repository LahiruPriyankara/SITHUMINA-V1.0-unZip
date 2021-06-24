package com.lhu.transaction;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lhu.transaction.Dao.TransactiondataDao;
import com.lhu.transaction.model.Transactiondata;


@RestController
//@RequestMapping("/billerInfo")
public class TransactinController {
	@Autowired
	TransactiondataDao 	transactiondataDao;
	
	@RequestMapping("/all-trandata")
    public List<Transactiondata> getAllTran() {	
		System.out.println("/all-trandata");
		List<Transactiondata> list = null;
		try {			
			list = transactiondataDao.findAll();			
			
		}catch (Exception e) {
			System.out.println("FAILED TO FETCH ALL TRAN DATA..");
			list = new ArrayList<>();
		}	
		return list;
    }
	
	@RequestMapping("/add-transaction/{tranAmount}/{cartId}")
    public int createNewInq(@PathVariable("tranAmount") int tranAmount,@PathVariable("cartId") int cartId) {	
		System.out.println("/add-inquiry/{inqDesc}");
		try {	
			System.out.println("tranAmount " + tranAmount+"  |  cartId : "+cartId);

			Transactiondata tran = new Transactiondata();
			tran.setTransaction_amount(tranAmount);
			tran.setCart_id(cartId);
			
			transactiondataDao.save(tran);
			return 1;
			
		}catch (Exception e) {
			System.out.println("FAILED TO CREATE NEW TRANSACTION..");
			return 2;
		}		
    }

}

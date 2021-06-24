package com.lhu.auth;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lhu.auth.Dao.UserDao;
import com.lhu.auth.model.Userdata;

@RestController
//@RequestMapping("/billerInfo")
public class CartController {
	@Autowired
	UserDao userDao;
	
	@RequestMapping("/uers")
    public List<Userdata> userRegister() {	
		System.out.println("/uers");
		List<Userdata> userList = new ArrayList<>();
		try {			
			userList = userDao.findAll();			
			
		}catch (Exception e) {
			System.out.println("FAILED TO FETCH ALL USERS..");
		}	
		return userList;
    }
	
	@RequestMapping("/uer-register/{userName}/{userPassword}/{userType}")
    public int userRegister(@PathVariable("userName") String userName,@PathVariable("userPassword") String userPassword,@PathVariable("userType") String userType) {	
		System.out.println("/uer-register");
		List<Userdata> userList = null;
		try {	
			System.out.println("userName " + userName);
			
			userList = userDao.getUserByUserName(userName);
			if (userList.size() > 0)
				return 3;

			Userdata userData = new Userdata();
			userData.setUser_name(userName);
			userData.setUser_password(userPassword);
			userData.setUser_type(userType);
			
			userDao.save(userData);
			return 1;
			
		}catch (Exception e) {
			System.out.println("FAILED TO LOGGIN..");
			return 2;
		}		
    }

	@RequestMapping("/uer-login/{userName}/{userPassword}")
    public Userdata userLogin(@PathVariable("userName") String userName,@PathVariable("userPassword") String userPassword) {	
		System.out.println("/uer-login");
		try {		
			
			List<Userdata> userList = userDao.userLogin(userName, userPassword);
			System.out.println("userList.size()  " +userList.size());
			if (userList.size() > 0) {
				System.out.println("SUUCESSFULLY LOGGIN..");
				return userList.get(0);
			}
			return new Userdata();
		}catch (Exception e) {
			System.out.println("FAILED TO LOGGIN..");
			return new Userdata();
		}		
    }

}

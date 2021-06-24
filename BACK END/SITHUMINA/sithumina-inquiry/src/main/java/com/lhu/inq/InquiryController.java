package com.lhu.inq;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lhu.inq.Dao.InquiryDao;
import com.lhu.inq.model.Inquiry;

@RestController
//@RequestMapping("/billerInfo")
public class InquiryController {
	@Autowired
	InquiryDao inquiryDao;
	
	@RequestMapping("/all-inquiry")
    public List<Inquiry> getAllInq() {	
		System.out.println("/all-inquiry");
		List<Inquiry> list = null;
		try {			
			list = inquiryDao.findAll();			
			
		}catch (Exception e) {
			System.out.println("FAILED TO FETCH ALL INQUIRIES..");
			list = new ArrayList<>();
		}	
		return list;
    }
	
	@RequestMapping("/add-inquiry/{inqDesc}/{userId}")
    public int createNewInq(@PathVariable("inqDesc") String inqDesc,@PathVariable("userId") int userId) {	
		System.out.println("/add-inquiry/{inqDesc}");
		try {	
			System.out.println("userId " + userId+"  |  inqDesc : "+inqDesc);

			Inquiry inquiry = new Inquiry();
			inquiry.setUser_id(userId);
            inquiry.setInquiry_desc(inqDesc);
			
			inquiryDao.save(inquiry);
			return 1;
			
		}catch (Exception e) {
			System.out.println("FAILED TO CREATE NEW INQUIRY..");
			return 2;
		}		
    }

}

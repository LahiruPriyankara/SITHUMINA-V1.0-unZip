package com.lhu.fetchdata.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lhu.fetchdata.model.Branch;

public interface BranchDao extends JpaRepository<Branch, Integer>{

}

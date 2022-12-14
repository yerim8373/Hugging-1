package com.ssafy.hugging.favorite.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ssafy.hugging.favorite.domain.FavoriteCounselor;

@Repository
public interface FavoriteCounselorRepository extends JpaRepository<FavoriteCounselor, Integer> {
	void deleteFavoriteCounselorByMemberIdAndCounselorId(Integer memberId, Integer counselorId);
}

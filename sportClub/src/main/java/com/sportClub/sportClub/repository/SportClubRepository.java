package com.sportClub.sportClub.repository;

import com.sportClub.sportClub.model.SportClub;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SportClubRepository extends JpaRepository<SportClub, Long> {
}

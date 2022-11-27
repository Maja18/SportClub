package com.sportClub.sportClub.service;

import com.sportClub.sportClub.dto.SkillSTO;
import com.sportClub.sportClub.mappers.SkillMapper;
import com.sportClub.sportClub.model.Skill;
import com.sportClub.sportClub.repository.SkillRepository;
import com.sportClub.sportClub.service.interface_service.SkillService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SkillServiceImpl implements SkillService {

    private final SkillRepository skillRepository;

    private final SkillMapper skillMapper;
    @Override
    public List<SkillSTO> getAllSkills() {
        List<Skill> skills = skillRepository.findAll();
        return skillMapper.skillsToSkillDTOs(skills);
    }
}

package com.sportClub.sportClub.mappers;

import com.sportClub.sportClub.dto.SkillSTO;
import com.sportClub.sportClub.model.Skill;
import org.mapstruct.InjectionStrategy;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper(
        componentModel = "spring",
        injectionStrategy = InjectionStrategy.FIELD
)
public interface SkillMapper {
    SkillMapper INSTANCE = Mappers.getMapper(SkillMapper.class);
    List<Skill> skillsDTOToSkills(List<SkillSTO> skillDTOList);
}


package com.codestates.pre.server.question.mapper;

import org.mapstruct.Mapper;

import com.codestates.pre.server.question.dto.QuestionPatchDto;
import com.codestates.pre.server.question.dto.QuestionPostDto;
import com.codestates.pre.server.question.dto.QuestionResponseDto;
import com.codestates.pre.server.question.entity.Questions;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
	Questions questionPostDtoToQuestion(QuestionPostDto questionPostDto);
	Questions questionPatchDtoToQuestion(QuestionPatchDto questionPatchDto);
	QuestionResponseDto questionToQuestionResponseDto(Questions questions);
}

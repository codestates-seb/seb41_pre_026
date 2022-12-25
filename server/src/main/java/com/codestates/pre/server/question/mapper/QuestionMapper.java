package com.codestates.pre.server.question.mapper;

import java.util.List;

import org.mapstruct.Mapper;

import com.codestates.pre.server.question.dto.QuestionPatchDto;
import com.codestates.pre.server.question.dto.QuestionPostDto;
import com.codestates.pre.server.question.dto.QuestionResponseDto;
import com.codestates.pre.server.question.entity.Question;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
	Question questionPostDtoToQuestion(QuestionPostDto questionPostDto);
	Question questionPatchDtoToQuestion(QuestionPatchDto questionPatchDto);
	QuestionResponseDto questionToQuestionResponseDto(Question question);
	List<QuestionResponseDto> questionsToQuestionsResponseDto(List<Question> questions);
}

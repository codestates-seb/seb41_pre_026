package com.codestates.pre.server.question.mapper;

import java.time.LocalDateTime;
import java.util.List;

import org.mapstruct.Mapper;

import com.codestates.pre.server.member.entity.Member;
import com.codestates.pre.server.question.dto.QuestionDeleteDto;
import com.codestates.pre.server.question.dto.QuestionPatchDto;
import com.codestates.pre.server.question.dto.QuestionPostDto;
import com.codestates.pre.server.question.dto.QuestionResponseDto;
import com.codestates.pre.server.question.entity.Question;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
	// Question questionPostDtoToQuestion(QuestionPostDto questionPostDto);
	default Question questionPostDtoToQuestion(QuestionPostDto questionPostDto) {
		Question question = new Question();
		Member member = new Member();

		question.setMid( questionPostDto.getMid() );
		question.setTitle( questionPostDto.getTitle() );
		question.setProblem( questionPostDto.getProblem() );
		question.setExpecting( questionPostDto.getExpecting() );
		member.setMemberId(questionPostDto.getMid());
		System.out.println("memberId"+member.getMemberId());
		return question;
	}
	QuestionResponseDto questionToQuestionResponseDto(Question question);

	default Question questionPatchDtoToQuestion(QuestionPatchDto questionPatchDto) {
		Question question = new Question();
		question.setId(questionPatchDto.getId());
		question.setProblem(questionPatchDto.getProblem());
		question.setTitle(questionPatchDto.getTitle());
		question.setExpecting(questionPatchDto.getExpecting());
		question.setModifiedAt(LocalDateTime.now());
		return question;
	}

	Question questionDeleteDtoToQuestion(QuestionDeleteDto questionDeleteDto);

	List<QuestionResponseDto> questionsToQuestionsResponseDto(List<Question> questions);
}

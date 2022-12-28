package com.codestates.pre.server.question.mapper;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.mapstruct.Mapper;

import com.codestates.pre.server.answer.dto.AnswerResponseDto;
import com.codestates.pre.server.answer.entity.Answer;
import com.codestates.pre.server.member.entity.Member;
import com.codestates.pre.server.question.dto.QuestionDeleteDto;
import com.codestates.pre.server.question.dto.QuestionGetResponseDto;
import com.codestates.pre.server.question.dto.QuestionPatchDto;
import com.codestates.pre.server.question.dto.QuestionPostDto;
import com.codestates.pre.server.question.dto.QuestionResponseDto;
import com.codestates.pre.server.question.entity.Question;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
	default Question questionPostDtoToQuestion(QuestionPostDto questionPostDto) {
		Question question = new Question();
		Member member = new Member();

		question.setMid( questionPostDto.getMid() );
		question.setTitle( questionPostDto.getTitle() );
		question.setProblem( questionPostDto.getProblem() );
		question.setExpecting( questionPostDto.getExpecting() );
		member.setMemberId(questionPostDto.getMid());
		return question;
	}

	default Question questionPatchDtoToQuestion(QuestionPatchDto questionPatchDto) {
		Question question = new Question();
		question.setQuestionId(questionPatchDto.getId());
		question.setMid(questionPatchDto.getMid());
		question.setProblem(questionPatchDto.getProblem());
		question.setTitle(questionPatchDto.getTitle());
		question.setExpecting(questionPatchDto.getExpecting());
		question.setModifiedAt(LocalDateTime.now());
		return question;
	}

	Question questionDeleteDtoToQuestion(QuestionDeleteDto questionDeleteDto);

	QuestionResponseDto questionToQuestionResponseDto(Question question);

	List<QuestionResponseDto> questionsToQuestionsResponseDto(List<Question> questions);


	default QuestionGetResponseDto questionToQuestionGetResponseDto(Question question) {
		List<Answer> answers = question.getAnswers();

		QuestionGetResponseDto questionGetResponseDto = new QuestionGetResponseDto();

		questionGetResponseDto.setId(question.getQuestionId());
		questionGetResponseDto.setMid(question.getMid());
		questionGetResponseDto.setTitle(question.getTitle());
		questionGetResponseDto.setProblem(question.getProblem());
		questionGetResponseDto.setExpecting(question.getExpecting());
		questionGetResponseDto.setScore(question.getScore());
		questionGetResponseDto.setCreated(question.getCreatedAt());
		questionGetResponseDto.setModified(question.getModifiedAt());
		questionGetResponseDto.setAnswers(
			questionToAnswerResponseDtos(answers)
		);

		return questionGetResponseDto;
	}

	default List<AnswerResponseDto> questionToAnswerResponseDtos(List<Answer> answers) {

		return answers
			.stream()
			.map(answer -> AnswerResponseDto
				.builder()
				.answerId(answer.getAnswerId())
				.answerContent(answer.getAnswerContent())
				.creationAt(answer.getCreationAt())
				.modifiedAt(answer.getModifiedAt())
				.score(answer.getScore())
				.questionId(answer.getQuestion().getQuestionId())
				.memberId(answer.getMember().getMemberId())
				.build()
		).collect(Collectors.toList());
	}
}

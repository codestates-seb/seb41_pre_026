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
		question.setTags(questionPostDto.getTags());
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
		question.setTags(questionPatchDto.getTags());
		question.setModifiedAt(LocalDateTime.now());
		return question;
	}

	Question questionDeleteDtoToQuestion(QuestionDeleteDto questionDeleteDto);

	default QuestionResponseDto questionToQuestionResponseDto(Question question) {
		if ( question == null ) {
			return null;
		}
		long mid = 0L;

		long questionId = question.getQuestionId();
		String title = question.getTitle();
		String problem = question.getProblem();
		String expecting = question.getExpecting();
		int score = question.getScore();
		String tags = question.getTags();
		long answerCount = question.getAnswerCount();
		int view = question.getView();
		if ( question.getMid() != null ) {
			mid = question.getMid();
		}
		LocalDateTime createdAt = question.getCreatedAt();
		LocalDateTime modifiedAt = question.getModifiedAt();

		String name = question.getMember().getName();
		String profile = question.getMember().getProfileImage();

		QuestionResponseDto questionResponseDto = new QuestionResponseDto( questionId, title, problem, expecting, score, tags, answerCount, view, mid, createdAt, modifiedAt, name, profile );

		return questionResponseDto;
	}

	default List<QuestionResponseDto> questionsToQuestionsResponseDto(List<Question> questions) {
		if ( questions == null ) {
			return null;
		}

		List<QuestionResponseDto> list = new ArrayList<QuestionResponseDto>( questions.size() );
		for ( Question question : questions ) {
			question.setMid(question.getMember().getMemberId());
			question.setName(question.getMember().getName());
			question.setProfile(question.getMember().getProfileImage());
			list.add( questionToQuestionResponseDto( question ) );
		}

		return list;
	}


	default QuestionGetResponseDto questionToQuestionGetResponseDto(Question question) {
		List<Answer> answers = question.getAnswers();

		QuestionGetResponseDto questionGetResponseDto = new QuestionGetResponseDto();

		questionGetResponseDto.setId(question.getQuestionId());
		questionGetResponseDto.setMid(question.getMember().getMemberId());
		questionGetResponseDto.setTitle(question.getTitle());
		questionGetResponseDto.setProblem(question.getProblem());
		questionGetResponseDto.setExpecting(question.getExpecting());
		questionGetResponseDto.setScore(question.getScore());
		questionGetResponseDto.setCreated(question.getCreatedAt());
		questionGetResponseDto.setModified(question.getModifiedAt());
		questionGetResponseDto.setAnswerCount(question.getAnswerCount());
		questionGetResponseDto.setView(question.getView());
		questionGetResponseDto.setAnswers(
			questionToAnswerResponseDtos(answers)
		);
		questionGetResponseDto.setTags(question.getTags());

		return questionGetResponseDto;
	}

	default List<AnswerResponseDto> questionToAnswerResponseDtos(List<Answer> answers) {

		return answers
			.stream()
			.map(answer -> AnswerResponseDto
				.builder()
				.answerId(answer.getAnswerId())
				.answerContent(answer.getAnswerContent())
				.createdAt(answer.getCreatedAt())
				.modifiedAt(answer.getModifiedAt())
				.score(answer.getScore())
				.questionId(answer.getQuestion().getQuestionId())
				.memberId(answer.getMember().getMemberId())
				.profile(answer.getMember().getProfileImage())
				.name(answer.getMember().getName())
				.build()
		).collect(Collectors.toList());
	}
}

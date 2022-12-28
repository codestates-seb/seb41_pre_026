package com.codestates.pre.server.question.mapper;

import java.time.LocalDateTime;
import java.util.List;

import org.mapstruct.Mapper;

import com.codestates.pre.server.answer.entity.Answer;
import com.codestates.pre.server.member.entity.Member;
import com.codestates.pre.server.question.dto.QuestionDeleteDto;
import com.codestates.pre.server.question.dto.QuestionGetResponseDto;
import com.codestates.pre.server.question.dto.QuestionPatchDto;
import com.codestates.pre.server.question.dto.QuestionPostDto;
import com.codestates.pre.server.question.dto.QuestionResponseDto;
import com.codestates.pre.server.question.entity.Question;
import com.codestates.pre.server.tag.Tag;

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

	default QuestionGetResponseDto questionToQuestionGetResponseDto(Question question) {
		if ( question == null ) {
			return null;
		}

		long id = 0L;
		long mid = 0L;
		String title = null;
		String problem = null;
		String expecting = null;
		int score = 0;

		if ( question.getMid() != null ) {
			mid = question.getMid();
		}

		id = question.getQuestionId();
		mid = question.getMid();
		title = question.getTitle();
		problem = question.getProblem();
		expecting = question.getExpecting();
		score = question.getScore();

		List<Tag> tags = null;
		String vote = null;
		LocalDateTime created = null;
		LocalDateTime modified = null;
		Answer answer = null;
		long view = 0L;

		created = question.getCreatedAt();
		modified = question.getModifiedAt();

		QuestionGetResponseDto questionGetResponseDto = new QuestionGetResponseDto( id, mid, title, problem, expecting, tags, score, vote, created, modified, answer, view );

		return questionGetResponseDto;
	}
	List<QuestionResponseDto> questionsToQuestionsResponseDto(List<Question> questions);
}

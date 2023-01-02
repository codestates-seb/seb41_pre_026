package com.codestates.pre.server.question.controller;

import java.util.List;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

import com.codestates.pre.server.answer.dto.AnswerResponseDto;
import com.codestates.pre.server.answer.entity.Answer;
import com.codestates.pre.server.question.dto.QuestionResponseDto;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.codestates.pre.server.dto.MultiResponseDto;
import com.codestates.pre.server.dto.SingleResponseDto;
import com.codestates.pre.server.question.dto.QuestionDeleteDto;
import com.codestates.pre.server.question.dto.QuestionPatchDto;
import com.codestates.pre.server.question.dto.QuestionPostDto;
import com.codestates.pre.server.question.entity.Question;
import com.codestates.pre.server.question.mapper.QuestionMapper;
import com.codestates.pre.server.question.service.QuestionService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Validated
@RestController
@RequestMapping("/questions")
public class QuestionController {
	private final QuestionMapper mapper;
	private final QuestionService questionService;

	@PostMapping
	public ResponseEntity postQuestion(@Valid @RequestBody QuestionPostDto questionPostDto) {
		Question question = mapper.questionPostDtoToQuestion(questionPostDto);
		Question response = questionService.creatQuestion(question);
		return new ResponseEntity(
				new SingleResponseDto(mapper.questionToQuestionResponseDto(response)), HttpStatus.CREATED
		);
	}

	@PatchMapping("/{question-id}")
	public ResponseEntity patchQuestion(@PathVariable("question-id") @Positive long questionId,
										@RequestBody QuestionPatchDto questionPatchDto) {
		questionPatchDto.setId(questionId);

		Question question = questionService.updateQuestion(questionId, mapper.questionPatchDtoToQuestion(questionPatchDto));

		return new ResponseEntity(
				new SingleResponseDto(mapper.questionToQuestionResponseDto(question)), HttpStatus.OK
		);
	}

	@GetMapping("/{question-id}")
	public ResponseEntity getQuestion(@PathVariable("question-id") @Positive long questionId,
									  @RequestParam long mid) {
		// TODO Member 엔티티 매핑 이후 @RequestParam 으로 mid(memberId)를 받아오는 코드가 추가되어야 합니다.

		Question question = questionService.findQuestion(questionId, mid);

		return new ResponseEntity(
				new SingleResponseDto(mapper.questionToQuestionGetResponseDto(question)), HttpStatus.OK
		);
	}

	@GetMapping
	public ResponseEntity getQuestions(@Positive @RequestParam int page,
									   @Positive @RequestParam int size) {
		// todo tag 구현하고 @RequestionParam으로 type을 받아와야 함

		Page<Question> questions = questionService.findQuestions(page - 1, size);
		List<Question> content = questions.getContent();
		return new ResponseEntity(
				new MultiResponseDto(mapper.questionsToQuestionsResponseDto(content), questions), HttpStatus.OK);
	}

	@DeleteMapping("{question-id}")
	public ResponseEntity deleteQuestion(@PathVariable("question-id") @Positive long questionsId,
										 @RequestBody QuestionDeleteDto questionDeleteDto) {
		Question question = mapper.questionDeleteDtoToQuestion(questionDeleteDto);
		questionService.deleteQuestion(questionsId, question);

		return new ResponseEntity(HttpStatus.NO_CONTENT);
	}

	//질문 추천
	@PostMapping("/upVote/{question-Id}")
	public ResponseEntity upVoteQuestion(@PathVariable("question-Id") @Positive long questionId) {

		// TO DO
		// 1. 회원만 추천할 수 있어야 한다. > db에서 이메일 검증
		// 2. 평판의 점수가 126 이상인 사람만 가능해야 할 것
		// 3. 이미 추천한 사람일 경우 다시 추천 불가 > 예외 던지기

		Question votedQuestionUp = questionService.upVote(questionId);
		QuestionResponseDto response = mapper.questionToQuestionResponseDto(votedQuestionUp);

		return new ResponseEntity<>(response, HttpStatus.OK);

	}


	// 질문 비추천
	@PostMapping("/downVote/{question-Id}")
	public ResponseEntity downVoteAnswer(@PathVariable("question-Id") long questionId) {

		Question votedQuestionDown = questionService.downVote(questionId);


		return new ResponseEntity<>(
				new SingleResponseDto<>(mapper.questionToQuestionResponseDto(votedQuestionDown)),
				HttpStatus.OK);

	}
}


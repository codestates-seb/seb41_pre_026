package com.codestates.pre.server.question.controller;

import java.util.List;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
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

@CrossOrigin(origins="http://localhost:3000", maxAge = 3600)
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
}

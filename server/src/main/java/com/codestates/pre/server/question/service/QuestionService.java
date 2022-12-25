package com.codestates.pre.server.question.service;

import java.time.LocalDateTime;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.codestates.pre.server.exception.BusinessLogicException;
import com.codestates.pre.server.exception.ExceptionCode;
import com.codestates.pre.server.question.entity.Question;
import com.codestates.pre.server.respository.QuestionRepository;
import com.codestates.pre.server.utils.CustomBeanUtils;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional
public class QuestionService {
	private final CustomBeanUtils<Question> beanUtils;
	private final QuestionRepository questionRepository;

	public Question creatQuestion(Question question) {
		verifyStrLength(question);
		return questionRepository.save(question);
	}

	public Question updateQuestion(Question question) {
		// verifyStrLength(question); // 20글자가 넘는지 검증
		Question findQuestion = findVerifiedQuestion(question.getId()); // 존재하는 게시물(Question)인지 검증

		// todo 게시물을 작성한 사용자(Member)가 맞는지 검증하는 로직 필요
		// todo update 하면 createdAt도 변경됨

		Question updatedQuestion = beanUtils.copyNonNullProperties(question, findQuestion);
		verifyStrLength(updatedQuestion);
		updatedQuestion.setModifiedAt(LocalDateTime.now());

		return questionRepository.save(updatedQuestion);
	}

	@Transactional(readOnly = true)
	public Question findQuestion(long questionsId) {
		Question findQuestion = findVerifiedQuestion(questionsId);
		return findQuestion;
	}

	@Transactional(readOnly = true)
	public Page<Question> findQuestions(int page, int size) {
		return questionRepository.findAll(PageRequest.of(page, size, Sort.by("id").descending()));
	}

	public void deleteQuestion(long questionId) {
		// todo 포스트(Question)의 작성자가 맞는지 검증 로직 필요


		Question question = findVerifiedQuestion(questionId);
		questionRepository.delete(question);
	}

	@Transactional(readOnly = true)
	public Question findVerifiedQuestion(long questionId) {
		Optional<Question> optionalQuestion = questionRepository.findById(questionId);
		Question question = optionalQuestion.orElseThrow(
			() -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
		return question;
	}

	private void verifyStrLength(Question question) {
		calculateStrLength(question.getTitle());
		calculateStrLength(question.getProblem());
		calculateStrLength(question.getExpecting());
	}


	private void calculateStrLength(String str) {
		if (str.length() <= 20) {
			// Todo 리팩토링 포인트
			// Todo 이후 ExcpetionCode에 20글자 보다 적다는 에러메세지 추가
			throw new BusinessLogicException(ExceptionCode.MEMBER_EXISTS);
		}
	}
}

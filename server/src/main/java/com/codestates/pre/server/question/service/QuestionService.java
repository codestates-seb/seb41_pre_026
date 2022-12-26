package com.codestates.pre.server.question.service;

import java.time.LocalDateTime;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.codestates.pre.server.exception.BusinessLogicException;
import com.codestates.pre.server.exception.ExceptionCode;
import com.codestates.pre.server.member.entity.Member;
import com.codestates.pre.server.member.service.MemberService;
import com.codestates.pre.server.question.entity.Question;
import com.codestates.pre.server.question.respository.QuestionRepository;
import com.codestates.pre.server.utils.CustomBeanUtils;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional
public class QuestionService {
	private final CustomBeanUtils<Question> beanUtils;
	private final QuestionRepository questionRepository;
	private final MemberService memberService;

	public Question creatQuestion(Question question) {
		verifyStrLength(question);
		Member member = memberService.findMember(question.getMid());
		question.setCreatedAt(LocalDateTime.now());
		question.setMember(member);
		return questionRepository.save(question);
	}

	public Question updateQuestion(Question question) {
		Question findQuestion = findVerifiedQuestion(question.getId()); // 존재하는 게시물(Question)인지 검증

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

	public void deleteQuestion(long questionId, Question question) {
		// todo 포스트(Question)의 작성자가 맞는지 검증 로직 필요 여기 에러해결중임다
		// question의 mid와 memberId가 다르면 예외던지기
		// if (question.getMid() != question.getMember().getMemberId()) {
		// 	throw new BusinessLogicException(ExceptionCode.FORBIDDEN);
		// }
		System.out.println("mid = " + question.getMid());
		System.out.println("memberId = " + question.getMember().getName());

		Question deleteQuestion = findQuestion(questionId);
		questionRepository.delete(deleteQuestion);
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
			throw new BusinessLogicException(ExceptionCode.POST_UNDER_TWENTY);
		}
	}

	private void compareMemberQuestion(long questionId) {
		Question question = findVerifiedQuestion(questionId);
		Member member = memberService.findMember(question.getMid());
		if (question.getMid() != member.getMemberId()) {
			throw new BusinessLogicException(ExceptionCode.FORBIDDEN);
		}
	}
}

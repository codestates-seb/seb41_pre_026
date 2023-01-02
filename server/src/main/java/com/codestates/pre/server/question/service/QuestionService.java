package com.codestates.pre.server.question.service;

import java.time.LocalDateTime;
import java.util.Optional;

import com.codestates.pre.server.answer.entity.Answer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.codestates.pre.server.answer.repository.AnswerRepository;
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
	private final AnswerRepository answerRepository;

	public Question creatQuestion(Question question) {
		verifyStrLength(question);
		Member member = memberService.findMember(question.getMid());
		question.setCreatedAt(LocalDateTime.now());
		question.addMember(member);
		return questionRepository.save(question);
	}

	public Question updateQuestion(long questionId, Question question) {
		Question findQuestion = findVerifiedQuestion(question.getQuestionId());
		Question verifiedQuestion = findVerifiedQuestion(questionId);

		if (verifiedQuestion.getMember().getMemberId() != question.getMid()) {
			throw new BusinessLogicException(ExceptionCode.FORBIDDEN);
		}

		Question updatedQuestion = beanUtils.copyNonNullProperties(question, findQuestion);
		verifyStrLength(updatedQuestion);
		updatedQuestion.setModifiedAt(LocalDateTime.now());

		return questionRepository.save(updatedQuestion);
	}

	@Transactional(readOnly = true)
	public Question findQuestion(long questionsId, long mid) {
		Question findQuestion = findVerifiedQuestion(questionsId);
		findQuestion.setMid(mid);
		return findQuestion;
	}

	@Transactional(readOnly = true)
	public Page<Question> findQuestions(int page, int size) {
		// todo answerCount 를 계산하는 로직이 필요합니다.

		return questionRepository.findAll(PageRequest.of(page, size, Sort.by("questionId").descending()));
	}

	public void deleteQuestion(long questionId, Question question) {
		Question verifiedQuestion = findVerifiedQuestion(questionId);
		if (verifiedQuestion.getMember().getMemberId() != question.getMid()) {
			throw new BusinessLogicException(ExceptionCode.FORBIDDEN);
		}

		questionRepository.delete(verifiedQuestion);
	}

	@Transactional(readOnly = true)
	public Question findVerifiedQuestion(long questionId) {
		Optional<Question> optionalQuestion = questionRepository.findById(questionId);
		Question question = optionalQuestion.orElseThrow(
			() -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
		return question;
	}

	// 질문 추천
	public Question upVote(long questionId) {
		Question findQuestion = findVerifiedQuestion(questionId);
		findQuestion.setScore(findQuestion.getScore() + 1);
		Question updateQuestion = questionRepository.save(findQuestion);

		return updateQuestion;
}

	// 질문 비추천
	public Question downVote(long questionId) {
		Question findQuestion = findVerifiedQuestion(questionId);
		findQuestion.setScore(findQuestion.getScore() - 1);
		Question updateQuestion = questionRepository.save(findQuestion);

		return updateQuestion;
	}

//	public Answer downVote(long answerId) {
//		Answer findAnswer = findVerifiedAnswer(answerId);
//		findAnswer.setScore(findAnswer.getScore() - 1);
//		Answer updateAnswer = answerRepository.save(findAnswer);
//
//		return updateAnswer;
//	}


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

	// public void getAnswerCount(long questionId) {
	// 	Question findQuestion = findVerifiedQuestion(questionId);
	// 	int answerCount = answerRepository.countAnswerByQuestion_QuestionId(findQuestion.getQuestionId()) + 1;
	// 	findQuestion.setAnswerCount(answerCount);
	// }
}

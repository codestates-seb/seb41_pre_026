package com.codestates.pre.server.answer.service;

import com.codestates.pre.server.answer.entity.Answer;
import com.codestates.pre.server.answer.repository.AnswerRepository;
import com.codestates.pre.server.exception.BusinessLogicException;
import com.codestates.pre.server.exception.ExceptionCode;
import com.codestates.pre.server.member.entity.Member;
import com.codestates.pre.server.member.repository.MemberRepository;
import com.codestates.pre.server.member.service.MemberService;
import com.codestates.pre.server.question.entity.Question;
import com.codestates.pre.server.question.service.QuestionService;
import com.codestates.pre.server.question.respository.QuestionRepository;
import com.codestates.pre.server.utils.CustomBeanUtils;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.Optional;

@RequiredArgsConstructor
@Service
@Transactional
public class AnswerService {
	private final AnswerRepository answerRepository;
	private final QuestionRepository questionRepository;
	private final MemberRepository memberRepository;
	private final MemberService memberService;

	private final QuestionService questionService;
	private final CustomBeanUtils<Answer> beanUtils;



	// 답변 등록
	public Answer createAnswer(Answer answer) {
		Member member = memberService.findMember(answer.getMid());
		Question question = questionService.findVerifiedQuestion(answer.getQid());
		answer.setCreatedAt(LocalDateTime.now());
		answer.addMember(member);
		answer.addQuestion(question);
		question.plusAnswerCount();
		return answerRepository.save(answer);
	}

	// 답변 수정
	public Answer updateAnswer(Answer answer) {
		Answer findAnswer = findVerifiedAnswer(answer.getAnswerId());
		Answer updatingAnswer = beanUtils.copyNonNullProperties(answer, findAnswer);
		//answer : 모든 필드를 저장할 변수,
		//destination : 모든 필드들 중 변경한 값만 저장할 변수
		updatingAnswer.setModifiedAt(LocalDateTime.now());

		return answerRepository.save(updatingAnswer);
	}

	// 답변 조회
	public Answer findAnswer(long answerId) {
		Answer findAnswer = findVerifiedAnswer(answerId);
		answerRepository.save(findAnswer);

		return findAnswer;
	}

	// 답변 전체 조회

	public Page<Answer> findAnswers(int page, int size) {
		return answerRepository.findAll(PageRequest.of(page, size,
			Sort.by("answerId").descending()));
	}

	// 답변 삭제
	public void deleteAnswer(long answerId) {
		Answer findAnswer = findVerifiedAnswer(answerId);
		Question question = questionService.findVerifiedQuestion(findAnswer.getQuestion().getQuestionId());
		question.minusAnswerCount();
		answerRepository.delete(findAnswer);
	}

	// 추천 기능
	public Answer upVote(long answerId) {
		Answer findAnswer = findVerifiedAnswer(answerId);
		findAnswer.setScore(findAnswer.getScore() + 1);
		Answer updateAnswer = answerRepository.save(findAnswer);

		return updateAnswer;
	}
//
	// 비추천 기능
	public Answer downVote(long answerId) {
		Answer findAnswer = findVerifiedAnswer(answerId);
		findAnswer.setScore(findAnswer.getScore() - 1);
		Answer updateAnswer = answerRepository.save(findAnswer);

		return updateAnswer;
	}

	// 답변 vote 기능 : 원하는 값으로 수정할 수 있음
//	public Answer downVote (long answerId,int score) {
//		Answer findAnswer = findVerifiedAnswer(answerId);
//		findAnswer.setScore(score);
//		//findAnswer.setScore(findAnswer.getScore() + 1);
//		Answer updateAnswer = answerRepository.save(findAnswer);
//
//		return updateAnswer;


	@Transactional(readOnly = true)
	public Answer findVerifiedAnswer(long answerId) {
		Optional<Answer> optionalAnswer = answerRepository.findById(answerId);
		// 답변이 DB에 존재하는지 검증
		// orElseThrow : 가져온 값이 null이면 예외
		Answer findAnswer = optionalAnswer.orElseThrow(() ->
			new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));
		return findAnswer;

	}

}

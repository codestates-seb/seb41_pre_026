package com.codestates.pre.server.member.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.codestates.pre.server.answer.repository.AnswerRepository;
import com.codestates.pre.server.exception.BusinessLogicException;
import com.codestates.pre.server.exception.ExceptionCode;
import com.codestates.pre.server.member.entity.Member;
import com.codestates.pre.server.member.repository.MemberRepository;
import com.codestates.pre.server.question.entity.Question;
import com.codestates.pre.server.respository.QuestionRepository;
import com.codestates.pre.server.utils.CustomBeanUtils;

//트랙잭션 추후에 적용 (이벤트 퍼블리셔, 회원가입 이메일 전송 로직)

@Service
public class MemberService {
	private final MemberRepository memberRepository;
	private final CustomBeanUtils<Member> beanUtils;
	private final QuestionRepository questionRepository;
	private final AnswerRepository answerRepository;

	public MemberService(MemberRepository memberRepository, CustomBeanUtils<Member> beanUtils,
		QuestionRepository questionRepository,
		AnswerRepository answerRepository) {
		this.memberRepository = memberRepository;
		this.beanUtils = beanUtils;
		this.questionRepository = questionRepository;
		this.answerRepository = answerRepository;
	}

	public Member createMember(Member member) {
		verifyExistsEmail(member.getEmail());

		return memberRepository.save(member);
	}

	public Member updateMember(Member member) {
		Member findMember = findVerifiedMember(member.getMemberId());

		Member updatedMember = beanUtils.copyNonNullProperties(member, findMember);

		return memberRepository.save(updatedMember);
	}

	public Member findMember(long memberId) {
		Member findMember = findVerifiedMember(memberId);
		findMember.setQuestionCount(getQuestionCount(memberId));
		findMember.setAnswerCount(getAnswersCount(memberId));
		return findMember;
	}

	// 전체 회원 조회는 필요없다

	public void deleteMember(long memberId) {
		Member findMember = findVerifiedMember(memberId);

		memberRepository.delete(findMember);
	}

	private Member findVerifiedMember(Long memberId) {
		Optional<Member> optionalMember = memberRepository.findById(memberId);
		Member findMember =
			optionalMember.orElseThrow(() ->
				new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
		return findMember;
	}

	private void verifyExistsEmail(String email) {
		Optional<Member> member = memberRepository.findByEmail(email);
		if (member.isPresent())
			throw new BusinessLogicException(ExceptionCode.MEMBER_EXISTS);
	}

	public Long getQuestionCount(Long memberId) {
		Long questionCount = questionRepository.countQuestionByMember_MemberId(memberId);
		return questionCount;
	}

	public Long getAnswersCount(Long memberId) {
		Long answerCount = answerRepository.countAnswerByMember_MemberId(memberId);
		return answerCount;
	}

	/*
	- 회원이 작성한 질문 모아보기
	- 회원이 작성한 답변 모아보기
	 */
}

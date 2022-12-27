package com.codestates.pre.server.member.service;

import java.util.List;
import java.util.Optional;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.codestates.pre.server.answer.repository.AnswerRepository;
import com.codestates.pre.server.auth.utils.CustomAuthorityUtils;
import com.codestates.pre.server.exception.BusinessLogicException;
import com.codestates.pre.server.exception.ExceptionCode;
import com.codestates.pre.server.member.entity.Member;
import com.codestates.pre.server.member.repository.MemberRepository;
import com.codestates.pre.server.question.respository.QuestionRepository;
import com.codestates.pre.server.utils.CustomBeanUtils;

//트랙잭션 추후에 적용 (이벤트 퍼블리셔, 회원가입 이메일 전송 로직)

@Service
public class MemberService {
	private final MemberRepository memberRepository;
	private final CustomBeanUtils<Member> beanUtils;
	private final QuestionRepository questionRepository;
	private final AnswerRepository answerRepository;
	//  PasswordEncoder를 이용해 패스워드를 암호화 위해 di
	private	final PasswordEncoder passwordEncoder;
	private final CustomAuthorityUtils authorityUtils;
	private final StorageService storageService;



	public MemberService(MemberRepository memberRepository, CustomBeanUtils<Member> beanUtils,
		QuestionRepository questionRepository,
		AnswerRepository answerRepository, PasswordEncoder passwordEncoder, CustomAuthorityUtils authorityUtils,
		StorageService storageService) {
		this.memberRepository = memberRepository;
		this.beanUtils = beanUtils;
		this.questionRepository = questionRepository;
		this.answerRepository = answerRepository;
		this.passwordEncoder = passwordEncoder;
		this.authorityUtils = authorityUtils;
		this.storageService = storageService;
	}

	public Member createMember(Member member) {
		verifyExistsEmail(member.getEmail());
		// PasswordEncoder를 이용해 패스워드를 암호화
		String encryptedPassword = passwordEncoder.encode(member.getPassword());
		// 암호화 된 패스워드를 password 필드에 다시 할당
		member.setPassword(encryptedPassword);

		// DB에 User Role 저장
		List<String> roles = authorityUtils.createRoles(member.getEmail());
		member.setRoles(roles);

		return memberRepository.save(member);
	}

	// Multi form data를 받도록 수정
	public Member updateMember(Member member, MultipartFile profileImage) {
		Member findMember = findVerifiedMember(member.getMemberId());

		Member updatedMember = beanUtils.copyNonNullProperties(member, findMember);

		// 이미지 정보 추가
		updatedMember.setProfileImageName(profileImage.getOriginalFilename());

		// 프로필 이미지 저장
		storageService.storeImage(profileImage);
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

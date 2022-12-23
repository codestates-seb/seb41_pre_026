package com.codestates.pre.server.member.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.codestates.pre.server.exception.BusinessLogicException;
import com.codestates.pre.server.exception.ExceptionCode;
import com.codestates.pre.server.member.entity.Member;
import com.codestates.pre.server.member.repository.MemberRepository;
import com.codestates.pre.server.utils.CustomBeanUtils;

//트랙잭션 추후에 적용 (이벤트 퍼블리셔, 회원가입 이메일 전송 로직)

@Service
public class MemberService {
	private final MemberRepository memberRepository;
	private final CustomBeanUtils<Member> beanUtils;

	public MemberService(MemberRepository memberRepository, CustomBeanUtils<Member> beanUtils) {
		this.memberRepository = memberRepository;
		this.beanUtils = beanUtils;
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

	// 마이페이지 조회, findMember 메서드 명 괜찮을까? 컨트롤러에서 본인만 볼 수 있는 로직 추가 필요? or fe에서 처리?
	public Member findMember(long memberId) {
		return findVerifiedMember(memberId);
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
}

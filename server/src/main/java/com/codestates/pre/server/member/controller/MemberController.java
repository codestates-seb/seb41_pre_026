package com.codestates.pre.server.member.controller;

import java.util.List;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

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
import com.codestates.pre.server.member.dto.MemberPatchDto;
import com.codestates.pre.server.member.dto.MemberPostDto;
import com.codestates.pre.server.member.entity.Member;
import com.codestates.pre.server.member.mapper.MemberMapper;
import com.codestates.pre.server.member.service.MemberService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/members")
@Validated
@Slf4j
@RequiredArgsConstructor
public class MemberController {
	private final MemberService memberService;
	private final MemberMapper mapper;

	@PostMapping
	public ResponseEntity postMember(@Valid @RequestBody MemberPostDto requestBody) {
		Member member = memberService.createMember(mapper.memberPostDtoToMember(requestBody));

		return new ResponseEntity<>(new SingleResponseDto<>(mapper.memberToMemberResponseDto(member)), HttpStatus.CREATED);
	}

	@PatchMapping(value = "/{member-id}")
	public ResponseEntity patchMember(@PathVariable("member-id") @Positive long memberId,
		@Valid @RequestBody MemberPatchDto requestBody) {
		requestBody.setMemberId(memberId);

		Member member = memberService.updateMember(mapper.memberPatchDtoToMember(requestBody));

		return new ResponseEntity<>(new SingleResponseDto<>(mapper.memberToMemberResponseDto(member)), HttpStatus.OK);
	}

	@GetMapping("/{member-id}")
	public ResponseEntity getMember(@PathVariable("member-id") @Positive long memberId) {
		Member member = memberService.findMember(memberId);

		return new ResponseEntity<>(new SingleResponseDto<>(mapper.myPageResponseDto(member)), HttpStatus.OK);
	}

	@GetMapping
	public ResponseEntity getMembers(@Positive @RequestParam int page,
		@Positive @RequestParam int size) {
		Page<Member> members = memberService.findMembers(page - 1, size);
		List<Member> content = members.getContent();
		return new ResponseEntity(new MultiResponseDto(mapper.membersToMembersResponseDto(content), members), HttpStatus.OK);
	}

	@DeleteMapping("/{member-id}")
	public ResponseEntity deleteMember(@PathVariable("member-id") @Positive long memberId) {
		memberService.deleteMember(memberId);

		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
}

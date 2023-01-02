package com.codestates.pre.server.member.dto;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class MemberResponseDto {
	private long memberId;
	private String name;
	private String email;

	private String profileImage;


	/*
	private List<Question> questions;

	private List<Answer> answers;

	✏️Advanced~
	 */
}

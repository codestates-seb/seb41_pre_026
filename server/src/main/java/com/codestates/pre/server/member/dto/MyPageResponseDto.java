package com.codestates.pre.server.member.dto;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class MyPageResponseDto {
	private long memberId;
	private String name;
	private String email;
	private String profileImage;
	private Long questionCount;
	private Long answerCount;
}


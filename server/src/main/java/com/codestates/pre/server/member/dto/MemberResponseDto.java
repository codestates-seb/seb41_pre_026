package com.codestates.pre.server.member.dto;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class MemberResponseDto {
	private long memberId;
	private String name;
	private String email;
	private String password;  // 포함되는게 맞는지 모르겟삼

	// private String image;
}

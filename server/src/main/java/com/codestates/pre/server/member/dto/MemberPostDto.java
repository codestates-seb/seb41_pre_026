package com.codestates.pre.server.member.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

import lombok.Getter;

@Getter
public class MemberPostDto {

	@NotBlank(message = "이름은 공백이 아니어야 합니다.") // 안내 메세지 한글 괜찮은지
	private String name;

	@NotBlank
	@Email
	private String email;

	// 패스워드 유효성 검증은? 임의로 작성해둠
	@Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[~!@#$%^&*()+|=])[A-Za-z\\d~!@#$%^&*()+|=]{8,16}$",
		message = "비밀번호는 숫자, 문자, 특수문자가 각각 1개 이상 포함되어야 하며, 최소 8자에서 최대 16자까지 허용합니다. ")
	private String password;

	private String profileImage;
}

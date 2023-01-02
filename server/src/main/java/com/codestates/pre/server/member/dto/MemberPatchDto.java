package com.codestates.pre.server.member.dto;

import javax.validation.constraints.Pattern;

import com.codestates.pre.server.validator.NotSpace;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class MemberPatchDto {
	private long memberId;

	// 이름 안넣고도 수정 가능하게 어케하지? --> @NotSpace가 필요하군아!!
	// 안내 메세지 한글 괜찮은지
	@NotSpace(message = "회원 이름은 공백이 아니어야 합니다")
	private String name;

	@NotSpace(message = "비밀번호는 공백이 아니어야 합니다.")
	@Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[~!@#$%^&*()+|=])[A-Za-z\\d~!@#$%^&*()+|=]{8,16}$",
		message = "비밀번호는 숫자, 문자, 특수문자가 각각 1개 이상 포함되어야 하며, 최소 8자에서 최대 16자까지 허용합니다. ")
	private String password;

	private String profileText;

	public void setMemberId(long memberId) {
		this.memberId = memberId;
	}
}

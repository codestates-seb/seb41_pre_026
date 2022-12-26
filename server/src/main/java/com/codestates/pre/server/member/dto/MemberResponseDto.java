package com.codestates.pre.server.member.dto;

import java.beans.Transient;
import java.util.ArrayList;
import java.util.List;

import com.codestates.pre.server.answer.entity.Answer;
import com.codestates.pre.server.answer.repository.AnswerRepository;
import com.codestates.pre.server.question.entity.Question;
import com.codestates.pre.server.respository.QuestionRepository;

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

	/*
	private List<Question> questions;

	private List<Answer> answers;

	✏️Advanced~
	 */
}

package com.codestates.pre.server.question.dto;

import java.time.LocalDateTime;

import org.aspectj.apache.bcel.generic.Tag;

public class QuestionResponseDto {
	private long id; // questionId

	private long mid; // memberId, Member와 연관관계 매핑 후 구현, 누가 쓴 글인지 확인 위함

	private String title;

	private String problem;

	private String expecting;

	private int score;

	private String vote; // 내역 존재 시 U or D, 내역 없으면 null

	private Tag tags;

	// Todo Answers 와 연관관계 매핑 후 구현
	// private Answer answer;

	private LocalDateTime createdAt;

	private LocalDateTime modifiedAt;

}

package com.codestates.pre.server.question.dto;

import java.time.LocalDateTime;


import com.codestates.pre.server.tag.Tag;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class QuestionResponseDto {
	private long questionId;
	private String title;
	private String problem;
	private String expecting;
	private String vote; // 내역 존재 시 U or D, 내역 없으면 null
	private Tag tags;
	private long answerCount;
	private int view;
	private long mid;
	private LocalDateTime createdAt;
	private LocalDateTime modifiedAt;

	// private boolean isAdopted;
}

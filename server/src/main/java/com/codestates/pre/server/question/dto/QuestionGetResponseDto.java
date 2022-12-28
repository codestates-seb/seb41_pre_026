package com.codestates.pre.server.question.dto;

import java.time.LocalDateTime;
import java.util.List;

import com.codestates.pre.server.answer.dto.AnswerResponseDto;
import com.codestates.pre.server.tag.Tag;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class QuestionGetResponseDto {
	private long id;
	private long mid;
	// private long answerId;
	private String title;
	private String problem;
	private String expecting;
	private List<Tag> tags;
	private int score;
	private String vote;
	private LocalDateTime created;
	private LocalDateTime modified;
	private List<AnswerResponseDto> answers;

	private long view;
}

package com.codestates.pre.server.question.dto;

import java.time.LocalDateTime;
import java.util.List;

import com.codestates.pre.server.answer.entity.Answer;
import com.codestates.pre.server.tag.Tag;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class QuestionGetResponseDto {
	private long id;
	private long mid;
	private String title;
	private String problem;
	private String expecting;
	private List<Tag> tags;
	private int score;
	private String vote;
	private LocalDateTime created;
	private LocalDateTime modified;
	private Answer answer;
	private long view;
}

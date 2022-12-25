package com.codestates.pre.server.question.dto;

import java.util.List;


import com.codestates.pre.server.tag.Tags;

import lombok.Getter;

@Getter
public class QuestionPatchDto {
	private long id; // questionId

	private String title;

	private String expecting;

	private List<Tags> tags;

	public void setId(long id) {
		this.id = id;
	}
}

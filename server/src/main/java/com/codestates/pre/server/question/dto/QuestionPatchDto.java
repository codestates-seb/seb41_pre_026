package com.codestates.pre.server.question.dto;

import java.util.List;


import com.codestates.pre.server.tag.Tag;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class QuestionPatchDto {
	private long id; // questionId

	private String title;

	private String problem;

	private String expecting;

	private List<Tag> tags;
}

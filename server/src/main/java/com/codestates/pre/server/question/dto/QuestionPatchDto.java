package com.codestates.pre.server.question.dto;

import java.util.List;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import com.codestates.pre.server.tag.Tags;

public class QuestionPatchDto {
	private long id; // questionId

	private String title;

	private String expecting;

	private List<Tags> tags;
}

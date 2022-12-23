package com.codestates.pre.server.question.dto;

import java.util.List;

import com.codestates.pre.server.tag.Tags;

public class QuestionPostDto {
	private String title;

	private String problem;

	private String expecting;

	private List<Tags> tags; // todo Tags 객체로 받을지 리스트로 받을지 고민
}

package com.codestates.pre.server.question.entity;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
public class Questions {
	@Id @GeneratedValue
	private long questionId;

	private String title;

	private String problem;

	private String expecting;

	private LocalDateTime createdAt = LocalDateTime.now();

	private LocalDateTime modifiedAt;

	private int score;

	// Todo QuestionTag 연관관계 매핑
	// private QuestionTag QuestionTag;

	// TODO member 엔티티 연관관계 매핑
	// private Member member;

	// Todo answer 엔티티 연관관계 매핑
	// private Answer answer;
}

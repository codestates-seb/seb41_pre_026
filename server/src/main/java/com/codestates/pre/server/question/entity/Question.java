package com.codestates.pre.server.question.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
public class Question {
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column(length = 256)
	private String title;

	private String problem;

	private String expecting;

	private LocalDateTime createdAt;

	private LocalDateTime modifiedAt = LocalDateTime.now();

	private int score;

	// Todo QuestionTag 연관관계 매핑
	// private QuestionTag QuestionTag;

	// TODO member 엔티티 연관관계 매핑
	// private Member member;

	// Todo answer 엔티티 연관관계 매핑
	// private Answer answer;
}

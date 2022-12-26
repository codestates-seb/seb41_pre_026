package com.codestates.pre.server.question.entity;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

import com.codestates.pre.server.answer.entity.Answer;
import com.codestates.pre.server.member.entity.Member;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
public class Question {
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Transient
	private Long mid;

	@Column(length = 256)
	private String title;

	private String problem;

	private String expecting;

	private LocalDateTime createdAt;

	private LocalDateTime modifiedAt = LocalDateTime.now();

	private int score;

	private boolean isAdopt; // answer 에서 채택여부 확인하는 변수

	@OneToMany(mappedBy = "question")
	private List<Answer> answers = new ArrayList<>();

	@ManyToOne
	@JoinColumn(name = "MEMBER_ID")
	private Member member;

	// Todo QuestionTag 연관관계 매핑필요
}

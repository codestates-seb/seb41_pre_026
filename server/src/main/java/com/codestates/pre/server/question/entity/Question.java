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

	@Column(length = 256)
	private String title;

	private String problem;

	private String expecting;

	private LocalDateTime createdAt;

	private LocalDateTime modifiedAt = LocalDateTime.now();

	private int score;

	@OneToMany(mappedBy = "question")
	private List<Answer> answers = new ArrayList<>();

	// Todo QuestionTag 연관관계 매핑
	// private QuestionTag QuestionTag;

	// TODO member 엔티티 연관관계 매핑
	// private Member member;
	@ManyToOne
	@JoinColumn(name = "member_id")
	private Member member;


	// Todo answer 엔티티 연관관계 매핑
	// private Answer answer;
}

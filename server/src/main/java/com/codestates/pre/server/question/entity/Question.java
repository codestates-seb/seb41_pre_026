package com.codestates.pre.server.question.entity;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

import org.hibernate.annotations.Formula;
import org.springframework.data.jpa.repository.Query;

import com.codestates.pre.server.answer.entity.Answer;
import com.codestates.pre.server.member.entity.Member;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
public class Question {
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private long questionId;

	@Transient
	private Long mid;

	@Column(length = 256)
	private String title;

	@Column(nullable = false, columnDefinition = "Text")
	private String problem;

	@Column(nullable = false, columnDefinition = "Text")
	private String expecting;

	private int answerCount = 0;

	private LocalDateTime createdAt;

	private LocalDateTime modifiedAt = LocalDateTime.now();

	@Column
	private int score;

	private String tags;

	@OneToMany(mappedBy = "question", cascade = CascadeType.REMOVE)
	private List<Answer> answers = new ArrayList<>();

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "MEMBER_ID")
	private Member member;


	public void addMember(Member member) {
		if (this.member != null) {
			this.member.getQuestions().remove(this);
		}
		this.member = member;
		this.member.getQuestions().add(this);
	}

	public void plusAnswerCount () {
		answerCount++;
	}

	public void minusAnswerCount () {
		answerCount--;
	}
}

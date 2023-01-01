package com.codestates.pre.server.member.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Transient;

import com.codestates.pre.server.answer.entity.Answer;
import com.codestates.pre.server.question.entity.Question;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Member {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long memberId;

	@Column(nullable = false) // name 최소/최대 입력 length 정해야함
	private String name;

	@Column(nullable = false, unique = true)
	private String email;

	@Column(nullable = false)
	private String password;

	private String profileImage;

	@Transient
	private Long questionCount;

	@Transient
	private Long answerCount;

	// 권한 부여를 위해 추가
	@ElementCollection(fetch = FetchType.EAGER)
	private List<String> roles = new ArrayList<>();

	@OneToMany(mappedBy = "member")
	private List<Question> questions = new ArrayList<>();

	@OneToMany(mappedBy = "member")
	private List<Answer> answers = new ArrayList<>();

	public Member(String name, String email, String password) {
		this.name = name;
		this.email = email;
		this.password = password;
	}

	//  양방향
	//  한 쪽의 엔티티만 추가해주는 실수를 하더라도 다른 쪽 엔티티를 추가해 주도록 qeustion쪽에도 member 추가
	public void setQuestion(Question question) {
		questions.add(question);
		if (question.getMember() != this) {
			question.setMember(this);
		}
	}

	public void setAnswer(Answer answer) {
		answers.add(answer);
		if (answer.getMember() != this) {
			answer.setMember(this);
		}
	}
}

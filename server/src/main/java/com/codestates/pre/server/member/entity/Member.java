package com.codestates.pre.server.member.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

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

	// private String image;


	@OneToMany(mappedBy = "member")
	private List<Question> questions = new ArrayList<>();

	@OneToMany(mappedBy = "member")
	private List<Answer> answers = new ArrayList<>();

	//추후에 연관관계 매핑 후 추가


	public Member(String name, String email, String password) {
		this.name = name;
		this.email = email;
		this.password = password;
	}

	// 이거 없애시면 안됩니다. 하루종일 이 코드 하나침 - TH
	public void setQuestion(Question question) {
		questions.add(question);
		if (question.getMember() != this) {
			question.setMember(this);
		}
	}
}

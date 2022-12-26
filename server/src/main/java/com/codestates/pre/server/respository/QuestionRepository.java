package com.codestates.pre.server.respository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.codestates.pre.server.question.entity.Question;

public interface QuestionRepository extends JpaRepository<Question, Long> {
	Long countQuestionByMember_MemberId(long memberId);
}

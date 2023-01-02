package com.codestates.pre.server.question.respository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.codestates.pre.server.question.entity.Question;

public interface QuestionRepository extends JpaRepository<Question, Long> {
	Long countQuestionByMember_MemberId(long memberId);


}

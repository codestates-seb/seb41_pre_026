package com.codestates.pre.server.answer.repository;

import com.codestates.pre.server.answer.entity.Answer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface AnswerRepository extends JpaRepository<Answer,Long>{
	Long countAnswerByMember_MemberId(Long memberId);
	Long countAnswerByQuestion_QuestionId(Long questionId);
}

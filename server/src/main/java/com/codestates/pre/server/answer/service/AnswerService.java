package com.codestates.pre.server.answer.service;

import com.codestates.pre.server.answer.entity.Answer;
import com.codestates.pre.server.answer.repository.AnswerRepository;
import com.codestates.pre.server.exception.BusinessLogicException;
import com.codestates.pre.server.exception.ExceptionCode;
import com.codestates.pre.server.utils.CustomBeanUtils;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AnswerService {
    private final AnswerRepository answerRepository;
    private final CustomBeanUtils<Answer> beanUtils;

    public AnswerService(AnswerRepository answerRepository, CustomBeanUtils<Answer> beanUtils) {

        this.answerRepository = answerRepository;
        this.beanUtils = beanUtils;
    }

    // 답변 등록
    public Answer createAnswer(Answer answer) {
        // Question question = questionService.find(questionid);
        // question db에서 질문이 존재하는지를 검증해야 함

        return answerRepository.save(answer);

    }

    // 답변 수정
    public Answer updateAnswer(Answer answer) {
        Answer findAnswer = findVerifiedAnswer(answer.getAnswerId());

        Answer updatingAnswer = beanUtils.copyNonNullProperties(answer, findAnswer);
        //answer : 모든 필드를 저장할 변수,
        //destination : 모든 필드들 중 변경한 값만 저장할 변수

        return answerRepository.save(updatingAnswer);
    }

    // 답변 삭제
    public void deleteAnswer(long answerId) {
        Answer findAnswer = findVerifiedAnswer(answerId);

       answerRepository.delete(findAnswer);
    }


    // 추천 기능
    public Answer upVote(long answerId) {
        Answer findAnswer = findVerifiedAnswer(answerId);
        findAnswer.setScore(findAnswer.getScore() + 1);
        Answer updateAnswer = answerRepository.save(findAnswer);

        return updateAnswer;
    }

    // 비추천 기능
    public Answer downVote(long answerId) {
        Answer findAnswer = findVerifiedAnswer(answerId);
        findAnswer.setScore(findAnswer.getScore() - 1);
        Answer updateAnswer = answerRepository.save(findAnswer);

        return updateAnswer;
    }

    public Answer findVerifiedAnswer(Long answerId) {
        Optional<Answer> optionalAnswer = answerRepository.findById(answerId);
        // 답변이 DB에 존재하는지 검증
        // orElseThrow : 가져온 값이 null이면 예외
        Answer findAnswer = optionalAnswer.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));
        return findAnswer;


    }

    // finById 메서드 적용(?)이 안돼서 그냥 만들었음
//    public Answer findById(Long id) {
//        return this.answerRepository.findById(id).get();
//    }

}

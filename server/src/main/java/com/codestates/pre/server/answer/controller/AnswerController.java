package com.codestates.pre.server.answer.controller;


import com.codestates.pre.server.answer.dto.AnswerPatchDto;
import com.codestates.pre.server.answer.dto.AnswerPostDto;
import com.codestates.pre.server.answer.entity.Answer;
import com.codestates.pre.server.answer.mapper.AnswerMapper;
import com.codestates.pre.server.answer.service.AnswerService;
import com.codestates.pre.server.dto.SingleResponseDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;

@RestController
@RequestMapping("/answers")
@Validated
@CrossOrigin
public class AnswerController {
    private final AnswerService answerService;

    private final AnswerMapper mapper;


    public AnswerController(AnswerService answerService, AnswerMapper mapper) {
        this.answerService = answerService;
        this.mapper = mapper;
    }


    // question의 id에 맞는 답변을 등록
    @PostMapping("/{question-id}/add") // uri : /answer/1/add
    public ResponseEntity postAnswer(@PathVariable("question-id") @Positive Long questionId,
                                    @Valid @RequestBody AnswerPostDto requestBody ) {

        Answer answer = mapper.answerPostDtoToAnswer(requestBody); // 요청 바디 > dto > 엔티티
        answerService.createAnswer(answer); // 비즈니스 로직 거침

        return new ResponseEntity(HttpStatus.CREATED); // 응답 제공
    }

    //답변 수정
    @PatchMapping("/{answer-id}")
    public ResponseEntity patchAnswer(@PathVariable("answer-id") @Positive long answerId,
                                      @Valid @RequestBody AnswerPatchDto patchDto) {
        // 답변을 작성한 사람이 맞는지 검증하는 로직 필요

        patchDto.setAnswerId(answerId);

        Answer answer =  answerService.updateAnswer (mapper.answerPatchDtoToAnswer(patchDto));

        return new ResponseEntity<> (
                new SingleResponseDto<>(mapper.answerToAnswerResponseDto(answer)),
                HttpStatus.OK); // 응답 제공
    }


    //답변 삭제
    @DeleteMapping("/{answer-id}/delete") //405method not Allowed 에러로 url 수정함
    public ResponseEntity deleteAnswer(@PathVariable("answer-id") @Positive long answerId) {

        // 로그인이 되어있는지 검증
        // 답변 작성자가 맞는지 검증
         answerService.deleteAnswer(answerId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // 추천기능
    @PostMapping("/{answer-Id}/upVote")
    public ResponseEntity upVote(@PathVariable("answer-Id") Long id) {

        // 로그인이 되어있는 회원인지 검증한다.

        Answer answer = answerService.findById(id);

        answerService.upVote(answer);

        return new ResponseEntity<>(HttpStatus.OK);
    }


    // 비추천기능
    @PostMapping("/{answer-Id}/downVote")
    public ResponseEntity downVote(@PathVariable("answerId") Long id) {

        // 로그인이 되어있는 회원인지 검증한다.

        Answer answer = answerService.findById(id);

        answerService.downVote(answer);

        return new ResponseEntity<>(HttpStatus.OK);
    }



}

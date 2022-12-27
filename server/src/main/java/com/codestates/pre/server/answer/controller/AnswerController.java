package com.codestates.pre.server.answer.controller;


import com.codestates.pre.server.answer.dto.AnswerPatchDto;
import com.codestates.pre.server.answer.dto.AnswerPostDto;
import com.codestates.pre.server.answer.dto.AnswerResponseDto;
import com.codestates.pre.server.answer.entity.Answer;
import com.codestates.pre.server.answer.mapper.AnswerMapper;
import com.codestates.pre.server.answer.service.AnswerService;
import com.codestates.pre.server.dto.MultiResponseDto;
import com.codestates.pre.server.dto.SingleResponseDto;
import com.codestates.pre.server.member.entity.Member;
import com.codestates.pre.server.member.service.MemberService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.data.domain.Page;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/answers")
@Validated
@CrossOrigin
public class AnswerController {
    private final AnswerService answerService;
    private final MemberService memberService;
    private final AnswerMapper mapper;


    public AnswerController(AnswerService answerService, MemberService memberService, AnswerMapper mapper) {
        this.answerService = answerService;
        this.memberService = memberService;
        this.mapper = mapper;
    }


    // question의 id에 맞는 답변을 등록
    @PostMapping
    public ResponseEntity postAnswer(@Valid @RequestBody AnswerPostDto answerPostDto ) {

        Answer answer = answerService.createAnswer(mapper.answerPostDtoToAnswer(answerPostDto));

       return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.answerToAnswerResponseDto(answer)), HttpStatus.CREATED);
    }

    //답변 수정
    @PatchMapping("/{answer-id}")
    public ResponseEntity patchAnswer(@PathVariable("answer-id") @Positive long answerId,
                                      @Valid @RequestBody AnswerPatchDto patchDto) {

        // 답변을 작성한 사람이 맞는지 검증하는 로직 필요

        Answer answer =  answerService.updateAnswer (mapper.answerPatchDtoToAnswer(patchDto));

        return new ResponseEntity<> (
                new SingleResponseDto<>(mapper.answerToAnswerResponseDto(answer)),
                HttpStatus.OK); // 응답 제공
    }

    // 답변 조회
    @GetMapping("/{answer-id}")
    public ResponseEntity getAnswer(@PathVariable("answer-id") @Positive Long answerId) {
        Answer answer = answerService.findAnswer(answerId);

        return new ResponseEntity<>(new SingleResponseDto<>(mapper.answerToAnswerResponseDto(answer)), HttpStatus.OK);
    }

    // 답변 전체조회
    @GetMapping
    public ResponseEntity getAnswers(@Positive @RequestParam int page,
                                     @Positive @RequestParam int size) {
        Page<Answer> pageAnswers = answerService.findAnswers(page - 1, size);
        List<Answer> answers = pageAnswers.getContent();

        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.answerToAnswerResponseDtos(answers), pageAnswers),
                HttpStatus.OK);
    }


    //답변 삭제
    @DeleteMapping("/{answer-id}")
    public ResponseEntity deleteAnswer(@PathVariable("answer-id") @Positive long answerId) {

        // 로그인이 되어있는지 검증
        // 답변 작성자가 맞는지 검증
         answerService.deleteAnswer(answerId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // 추천기능
    @PostMapping("/{answer-Id}/upVote")
    public ResponseEntity upVote(@PathVariable("answer-Id") long answerId) {

        // 로그인이 되어 있는지 검증 필요
        Answer votedAnswerUp = answerService.upVote(answerId);
        AnswerResponseDto response = mapper.answerToAnswerResponseDto(votedAnswerUp);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }


    // 비추천기능
    @PostMapping("/{answer-Id}/downVote")
    public ResponseEntity downVote(@PathVariable("answerId") long answerId) {

        Answer votedAnswerDown = answerService.downVote(answerId);

        AnswerResponseDto response = mapper.answerToAnswerResponseDto(votedAnswerDown);

        return new ResponseEntity<>(response, HttpStatus.OK);

    }



}

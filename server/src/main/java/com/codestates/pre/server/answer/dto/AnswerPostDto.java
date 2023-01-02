package com.codestates.pre.server.answer.dto;


import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;

import java.time.LocalDateTime;

@Getter
@Setter
public class AnswerPostDto {

    private long mid; // memberId

    private long qid;

    @NotBlank // 답변 내용은 비어있으면 안됨
    private String answerContent;
    // 클라이언트가 작성하는 답변 컨텐츠

}

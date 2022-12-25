package com.codestates.pre.server.answer.dto;

import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class AnswerResponseDto {
    private Long answerId;

    private String answerContent;

    private LocalDateTime creationAt;

    private LocalDateTime modifiedAt;

    private int score;

    private Long questionId;

}

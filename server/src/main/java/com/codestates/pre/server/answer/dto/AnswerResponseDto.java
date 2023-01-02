package com.codestates.pre.server.answer.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Builder
@Getter
@Setter
public class AnswerResponseDto {
    private Long answerId;

    private String answerContent;

    private LocalDateTime createdAt;

    private LocalDateTime modifiedAt;

    private int score;

    private Long questionId; //questionId

    private long memberId;

    private String name;

    private String profile;
}

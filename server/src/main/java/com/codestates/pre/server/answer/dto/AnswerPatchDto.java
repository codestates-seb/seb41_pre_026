package com.codestates.pre.server.answer.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
public class AnswerPatchDto {

    private long answerId;

    @NotBlank // 답변 내용은 비어있으면 안됨
    private String answerContent;
    // 클라이언트가 수정하기 위해 작성하는 답변 컨텐츠


}

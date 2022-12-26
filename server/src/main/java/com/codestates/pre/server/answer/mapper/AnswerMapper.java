package com.codestates.pre.server.answer.mapper;

import com.codestates.pre.server.answer.dto.AnswerPatchDto;
import com.codestates.pre.server.answer.dto.AnswerPostDto;
import com.codestates.pre.server.answer.dto.AnswerResponseDto;
import com.codestates.pre.server.answer.entity.Answer;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface AnswerMapper {
    Answer answerPostDtoToAnswer(AnswerPostDto answerPostDto);
    Answer answerPatchDtoToAnswer(AnswerPatchDto answerPatchDto);
    AnswerResponseDto answerToAnswerResponseDto(Answer answer);
}

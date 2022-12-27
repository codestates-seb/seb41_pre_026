package com.codestates.pre.server.answer.mapper;

import com.codestates.pre.server.answer.dto.AnswerPatchDto;
import com.codestates.pre.server.answer.dto.AnswerPostDto;
import com.codestates.pre.server.answer.dto.AnswerResponseDto;
import com.codestates.pre.server.answer.entity.Answer;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface AnswerMapper {
    // Answer answerPostDtoToAnswer(AnswerPostDto answerPostDto);

    default Answer answerPostDtoToAnswer(AnswerPostDto answerPostDto) {
        if ( answerPostDto == null ) {
            return null;
        }

        Answer answer = new Answer();

        answer.setMid(answerPostDto.getMid());
        answer.setQid(answerPostDto.getQid());
        answer.setAnswerContent( answerPostDto.getAnswerContent() );

        return answer;

    }
    Answer answerPatchDtoToAnswer(AnswerPatchDto answerPatchDto);

    // AnswerResponseDto answerToAnswerResponseDto(Answer answer);

    default AnswerResponseDto answerToAnswerResponseDto(Answer answer) {
        if ( answer == null ) {
            return null;
        }

        AnswerResponseDto answerResponseDto = new AnswerResponseDto();

        answerResponseDto.setAnswerId( answer.getAnswerId() );
        answerResponseDto.setMemberId(answer.getMember().getMemberId());
        answerResponseDto.setAnswerContent( answer.getAnswerContent() );
        answerResponseDto.setCreationAt( answer.getCreationAt() );
        answerResponseDto.setModifiedAt( answer.getModifiedAt() );
        answerResponseDto.setScore( answer.getScore() );
        answerResponseDto.setQuestionId( answer.getQuestion().getQuestionId() );

        return answerResponseDto;
    }

    List<AnswerResponseDto> answerToAnswerResponseDtos(List<Answer> members);

}

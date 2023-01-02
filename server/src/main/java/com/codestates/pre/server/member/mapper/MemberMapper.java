package com.codestates.pre.server.member.mapper;

import java.util.List;

import org.mapstruct.Mapper;

import com.codestates.pre.server.dto.MultiResponseDto;
import com.codestates.pre.server.member.dto.MyPageResponseDto;
import com.codestates.pre.server.member.dto.MemberPatchDto;
import com.codestates.pre.server.member.dto.MemberPostDto;
import com.codestates.pre.server.member.dto.MemberResponseDto;
import com.codestates.pre.server.member.entity.Member;
import com.codestates.pre.server.question.dto.QuestionResponseDto;
import com.codestates.pre.server.question.entity.Question;

@Mapper(componentModel = "spring")
public interface MemberMapper {
	Member memberPostDtoToMember(MemberPostDto requestBody);
	Member memberPatchDtoToMember(MemberPatchDto requestBody);
	MemberResponseDto memberToMemberResponseDto(Member member);

	List<MemberResponseDto> membersToMembersResponseDto (List<Member> members);
	MyPageResponseDto myPageResponseDto(Member member);
}

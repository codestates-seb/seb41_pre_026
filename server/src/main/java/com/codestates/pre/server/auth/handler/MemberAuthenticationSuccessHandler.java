package com.codestates.pre.server.auth.handler;

import static org.apache.tomcat.jni.Socket.*;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

import com.codestates.pre.server.auth.dto.LoginDto;
import com.codestates.pre.server.auth.dto.MemberLoginResponseDto;
import com.codestates.pre.server.member.dto.MemberResponseDto;
import com.codestates.pre.server.member.entity.Member;
import com.codestates.pre.server.member.repository.MemberRepository;
import com.codestates.pre.server.response.ErrorResponse;
import com.google.gson.Gson;

import lombok.extern.slf4j.Slf4j;

@Slf4j
public class MemberAuthenticationSuccessHandler implements AuthenticationSuccessHandler {
	@Override
	public void onAuthenticationSuccess(HttpServletRequest request,
		HttpServletResponse response,
		Authentication authentication) throws IOException {
			log.info("# Authenticated successfully!");

			sendMemberIdResponse(response, authentication);
		}
		// 인증 성공 후, 로그를 기록하거나 사용자 정보를 response로 전송하는 등의 추가 작업

	private void sendMemberIdResponse(HttpServletResponse response, Authentication authentication) throws IOException {
		Gson gson = new Gson();
		Member member = (Member)authentication.getPrincipal();
		MemberLoginResponseDto memberIdResponse = new MemberLoginResponseDto();
		memberIdResponse.setMemberId(member.getMemberId());

		response.setContentType(MediaType.APPLICATION_JSON_VALUE);
		response.setStatus(HttpStatus.OK.value());
		response.getWriter().write(gson.toJson(memberIdResponse, MemberLoginResponseDto.class));
	}
}

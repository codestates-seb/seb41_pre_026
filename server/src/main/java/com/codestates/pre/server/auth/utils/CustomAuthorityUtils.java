package com.codestates.pre.server.auth.utils;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;

@Component
public class CustomAuthorityUtils {
	@Value("pre26@gamil.com")
	private String adminMailAddress;

	private final List<GrantedAuthority> ADMIN_ROLES = AuthorityUtils.createAuthorityList("ROLE_ADMIN", "ROLE_USER");
	private final List<GrantedAuthority> USER_ROLES = AuthorityUtils.createAuthorityList("ROLE_USER");

	//비회원 해야되나?
	// private final List<GrantedAuthority> NON_USER_ROLES = AuthorityUtils.createAuthorityList("ROLE_NON_USER");

	private final List<String> ADMIN_ROLES_STRING = List.of("ADMIN", "USER");
	private final List<String> USER_ROLES_STRING = List.of("USER");
	// private final List<String> NON_USER_ROLES_STRING = List.of("NON_USER");

	// 메모리 상의 Role을 기반으로 권한 정보 생성.
	public List<GrantedAuthority> createAuthorities(String email) {
		if (email.equals(adminMailAddress)) {
			return ADMIN_ROLES;
		}
		return USER_ROLES;
	}

	// DB에 저장된 Role을 기반으로 권한 정보 생성
	public List<GrantedAuthority> createAuthorities(List<String> roles) {
		List<GrantedAuthority> authorities = roles.stream()
			.map(role -> new SimpleGrantedAuthority("ROLE_" + role))
			.collect(Collectors.toList());
		return authorities;
	}

	// DB 저장 용
	public List<String> createRoles(String email) {
		if (email.equals(adminMailAddress)) {
			return ADMIN_ROLES_STRING;
		}
		return USER_ROLES_STRING;
	}
}

package com.codestates.pre.server.config;

import static org.springframework.security.config.Customizer.*;

import java.util.Arrays;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import com.codestates.pre.server.auth.filter.JwtAuthenticationFilter;
import com.codestates.pre.server.auth.filter.JwtVerificationFilter;
import com.codestates.pre.server.auth.handler.MemberAccessDeniedHandler;
import com.codestates.pre.server.auth.handler.MemberAuthenticationEntryPoint;
import com.codestates.pre.server.auth.handler.MemberAuthenticationFailureHandler;
import com.codestates.pre.server.auth.handler.MemberAuthenticationSuccessHandler;
import com.codestates.pre.server.auth.jwt.JwtTokenizer;
import com.codestates.pre.server.auth.utils.CustomAuthorityUtils;

@Configuration
public class SecurityConfiguration {
	private final JwtTokenizer jwtTokenizer;
	private final CustomAuthorityUtils authorityUtils;

	public SecurityConfiguration(JwtTokenizer jwtTokenizer, CustomAuthorityUtils authorityUtils) {
		this.jwtTokenizer = jwtTokenizer;
		this.authorityUtils = authorityUtils;
	}

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http
			.headers().frameOptions().sameOrigin() // 웹 브라우저에서 H2 웹 콘솔을 정상적으로 사용하기 위한 설정, // frameOptions()는 HTML 태그 중에서 <frame>이나 <iframe>, <object> 태그에서 페이지를 렌더링 할지의 여부를 결정하는 기능
			.and()
			.csrf().disable()
			.cors(withDefaults())
			.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
			.and()
			.formLogin().disable()
			.httpBasic().disable()
			.exceptionHandling()
			.authenticationEntryPoint(new MemberAuthenticationEntryPoint())
			.accessDeniedHandler(new MemberAccessDeniedHandler())
			.and()
			.apply(new CustomFilterConfigurer())
			.and() // 전체적으로 해당 멤버만 수정또는 삭제 가능하도록 수정되어야 할 수도 있다리 ㅋㅋ ;
			.authorizeHttpRequests(authorize -> authorize
				.antMatchers(HttpMethod.POST, "/*/members").permitAll()
				.antMatchers(HttpMethod.PATCH, "/*/members/**").hasRole("USER")
				.antMatchers(HttpMethod.GET, "/*/members/**").hasAnyRole("USER", "ADMIN")
				.antMatchers(HttpMethod.DELETE, "/*/members/**").hasRole("USER")

				.antMatchers(HttpMethod.POST, "/*/questions").hasRole("USER") // user만 질문 올릴 수 있도록, admin도 질문 포스팅 가능하게?
				.antMatchers(HttpMethod.PATCH, "/*/questions/**").hasRole("USER") //질문 올린 유저만 수정 가능하도록 해야하나... 프론트에서 처리해준다 했으니까 상관없나.. "/*/questions/{question-id}"
				.antMatchers(HttpMethod.GET, "/*/questions/**").permitAll()
				.antMatchers(HttpMethod.GET, "/*/questions").permitAll() // question전체 조회시 페이지네이션 파라미터 받아올 필요 없을듯? -> 페이지네이션 size, page 고정으로 하자고 이야기 해보장
				.antMatchers(HttpMethod.DELETE, "/*/questions/**").hasRole("USER") // patch랑 동일하게 고민됨 ㅋㅋ

				.antMatchers(HttpMethod.POST, "/*/answers").hasRole("USER")
				.antMatchers(HttpMethod.PATCH, "/*/answers/**").hasRole("USER")
				//.antMatchers(HttpMethod.PATCH, "/*/answers/{answer-id}").hasRole("USER")) 에다가 memberid로.. 수정 어쩌고..가능하게 어케 하지
				//.antMatchers(HttpMethod.GET, "/*/answers/**").permitAll()
				//.antMatchers(HttpMethod.GET, "/*/answers").permitAll()
				.antMatchers(HttpMethod.DELETE, "/*/answers/**").hasRole("USER") // /answers로 끝내도 되나....... 모르겠음 ㅋㅋ
				// 만약 vote, tag기능 추가 된다면 해당 기능도 권한 설정 필요
				.anyRequest().permitAll()
			);
		// 우리는 v1 이런거 안했으니깐 앞에 *은 다 뺴도 될듯 ㅇㅅㅇ

		return http.build();
	}



	@Bean
	public PasswordEncoder passwordEncoder() {
		// DelegatingPasswordEncoder를 먼저 생성 -> 실질적으로 PasswordEncoder 구현 객체를 생성
		return PasswordEncoderFactories.createDelegatingPasswordEncoder();
	}

	@Bean
	CorsConfigurationSource corsConfigurationSource() {
		CorsConfiguration configuration = new CorsConfiguration();
		configuration.setAllowedOrigins(Arrays.asList("*"));
		configuration.setAllowedMethods(Arrays.asList("GET","POST", "PATCH", "DELETE"));
		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		source.registerCorsConfiguration("/**", configuration);
		return source;
	}


	public class CustomFilterConfigurer extends AbstractHttpConfigurer<CustomFilterConfigurer, HttpSecurity> {
		@Override
		public void configure(HttpSecurity builder) throws Exception {
			AuthenticationManager authenticationManager = builder.getSharedObject(AuthenticationManager.class);

			JwtAuthenticationFilter jwtAuthenticationFilter = new JwtAuthenticationFilter(authenticationManager, jwtTokenizer);
			jwtAuthenticationFilter.setFilterProcessesUrl("/member");
			jwtAuthenticationFilter.setAuthenticationSuccessHandler(new MemberAuthenticationSuccessHandler());
			jwtAuthenticationFilter.setAuthenticationFailureHandler(new MemberAuthenticationFailureHandler());

			JwtVerificationFilter jwtVerificationFilter = new JwtVerificationFilter(jwtTokenizer, authorityUtils);


			builder
				.addFilter(jwtAuthenticationFilter)
				.addFilterAfter(jwtVerificationFilter, JwtAuthenticationFilter.class);
		}
	}
}

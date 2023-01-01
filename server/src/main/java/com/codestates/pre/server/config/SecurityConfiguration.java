package com.codestates.pre.server.config;

import static org.springframework.security.config.Customizer.*;

import java.util.Arrays;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
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


// 해당 클래스에 우리가 원하는 인증 방식과 웹 페이지에 대한 접근 권한 설정 가능

@Configuration
public class SecurityConfiguration {
	private final JwtTokenizer jwtTokenizer;
	private final CustomAuthorityUtils authorityUtils;

	public SecurityConfiguration(JwtTokenizer jwtTokenizer, CustomAuthorityUtils authorityUtils) {
		this.jwtTokenizer = jwtTokenizer;
		this.authorityUtils = authorityUtils;
	}


	// HttpSecurity를 파라미터로 가지고, SecurityFilterChain을 리턴하는 형태의 메서드를 정의해 HTTP 보안 설정을 구성
	// 파라미터로 지정한 HttpSecurity는 HTTP 요청에 대한 보안 설정을 구성하기 위한 핵심 클래스
	// SecurityFilterChain을 Bean으로 등록해서 HTTP 보안 설정을 구성하는 방식 사용 (권장됨)
	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http
			.headers().frameOptions().disable()
			.and() // and() 메서드를 통해 Spring Security 보안 설정을 메서드 체인 형태로 구성
			.csrf().disable() // CSRF(Cross-Site Request Forgery) 공격에 대한 Spring Security에 대한 설정을 비활성화, 원래는 csrf() 공격을 방지하기 위해 클라이언트로부터 CSRF Token을 수신 후, 검증하기 위해 설정 필요
			.cors(withDefaults())
			.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
			.and()
			.formLogin().disable() // 폼 로그인 방식 비활성화
			.httpBasic().disable()
			.exceptionHandling()
			.authenticationEntryPoint(new MemberAuthenticationEntryPoint())
			.accessDeniedHandler(new MemberAccessDeniedHandler())
			.and()
			.apply(new CustomFilterConfigurer())
			.and()
			.authorizeHttpRequests(authorize -> authorize  // 클라이언트의 요청이 들어오면 접근 권한을 확인
				// .antMatchers(HttpMethod.OPTIONS, "/**/*").permitAll()

				.antMatchers(HttpMethod.POST, "/*/members").permitAll()
				.antMatchers(HttpMethod.PATCH, "/*/members/**").hasRole("USER")
				.antMatchers(HttpMethod.GET, "/*/members/**").hasAnyRole("USER", "ADMIN")
				.antMatchers(HttpMethod.DELETE, "/*/members/**").hasRole("USER")

				.antMatchers(HttpMethod.POST, "/*/questions").hasRole("USER")
				.antMatchers(HttpMethod.PATCH, "/*/questions/**").hasRole("USER")
				.antMatchers(HttpMethod.GET, "/*/questions/**").permitAll()
				.antMatchers(HttpMethod.GET, "/*/questions").permitAll()
				.antMatchers(HttpMethod.DELETE, "/*/questions/**").hasRole("USER")

				.antMatchers(HttpMethod.POST, "/*/answers").hasRole("USER")
				.antMatchers(HttpMethod.PATCH, "/*/answers/**").hasRole("USER")
				.antMatchers(HttpMethod.DELETE, "/*/answers/**").hasRole("USER")
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
		configuration.setAllowedOrigins(Arrays.asList("http://localhost:3000"));
		configuration.setAllowedMethods(Arrays.asList("POST", "GET", "PATCH", "DELETE", "OPTIONS"));
		configuration.setAllowedHeaders(Arrays.asList("*"));
		configuration.addExposedHeader("Authorization");
		configuration.addExposedHeader("Refresh");
		configuration.setAllowCredentials(true);
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

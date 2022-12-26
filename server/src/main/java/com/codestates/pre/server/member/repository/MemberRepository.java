package com.codestates.pre.server.member.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.codestates.pre.server.member.entity.Member;

public interface MemberRepository extends JpaRepository<Member, Long> {
	Optional<Member> findByEmail(String email);
}

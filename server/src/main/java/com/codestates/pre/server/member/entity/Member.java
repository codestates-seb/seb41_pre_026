package com.codestates.pre.server.member.entity;

import javax.persistence.Entity;

@Entity
public class Member {
	private long memberId;
	private String name;
	private String email;
	private String password;
}

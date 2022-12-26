package com.codestates.pre.server.tag;

import javax.persistence.Column;
import javax.persistence.Id;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class Tag {
	@Id
	private long tagId;

	@Column(unique = true, length = 20)
	private String tag;
}

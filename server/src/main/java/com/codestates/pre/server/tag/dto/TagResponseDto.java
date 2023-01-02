package com.codestates.pre.server.tag.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class TagResponseDto {
	private long tagId;
	private String name;
	private String tagExplain;
	private int total;
}

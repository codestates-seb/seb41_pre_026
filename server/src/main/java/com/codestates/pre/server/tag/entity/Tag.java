package com.codestates.pre.server.tag.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter
@Entity
@NoArgsConstructor
public class Tag {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long tagId;

	@Column(unique = true, length = 20)
	private String name;

	@Column(nullable = false, columnDefinition = "Text")
	private String tagExplain;

	@Column(nullable = false)
	private int total;
}

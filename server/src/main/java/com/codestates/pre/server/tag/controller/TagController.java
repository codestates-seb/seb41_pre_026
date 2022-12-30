package com.codestates.pre.server.tag.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.codestates.pre.server.dto.SingleResponseDto;
import com.codestates.pre.server.tag.dto.TagResponseDto;
import com.codestates.pre.server.tag.entity.Tag;
import com.codestates.pre.server.tag.mapper.TagMapper;
import com.codestates.pre.server.tag.service.TagService;

import lombok.RequiredArgsConstructor;

@RestController
@CrossOrigin(origins="http://localhost:3000", maxAge = 3600)
@RequestMapping("/tags")
@RequiredArgsConstructor
public class TagController {
	private final TagMapper mapper;
	private final TagService tagService;

	// @PostMapping
	// public ResponseEntity postTag(@RequestBody TagPostDto tagPostDto) {
	// 	Tag tag = tagService.createTag(mapper.tagPostDtoToTag(tagPostDto));
	// 	return new ResponseEntity(new SingleResponseDto(mapper.tagToTagResponseDto(tag)), HttpStatus.CREATED);
	// }

	@GetMapping
	public ResponseEntity getTags() {
		List<Tag> tags = tagService.findTags();
		List<TagResponseDto> tagResponseDtos = tags.stream()
			.map(tag -> mapper.tagToTagResponseDto(tag))
			.collect(Collectors.toList());

		return new ResponseEntity(new SingleResponseDto(tagResponseDtos), HttpStatus.OK);
	}
}

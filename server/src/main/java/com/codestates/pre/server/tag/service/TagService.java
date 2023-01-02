package com.codestates.pre.server.tag.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.codestates.pre.server.tag.entity.Tag;
import com.codestates.pre.server.tag.repository.TagRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class TagService {
	private final TagRepository tagRepository;

	@Transactional
	public Tag createTag(Tag tag) {
		return tagRepository.save(tag);
	}

	@Transactional(readOnly = true)
	public List<Tag> findTags() {
		return (List<Tag>)tagRepository.findAll();
	}
}

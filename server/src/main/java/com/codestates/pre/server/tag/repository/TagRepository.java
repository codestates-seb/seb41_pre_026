package com.codestates.pre.server.tag.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.codestates.pre.server.tag.entity.Tag;

public interface TagRepository extends JpaRepository<Tag, Long> {
}

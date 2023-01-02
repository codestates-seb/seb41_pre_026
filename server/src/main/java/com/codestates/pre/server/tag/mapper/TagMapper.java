package com.codestates.pre.server.tag.mapper;

import org.mapstruct.Mapper;

import com.codestates.pre.server.tag.dto.TagPostDto;
import com.codestates.pre.server.tag.dto.TagResponseDto;
import com.codestates.pre.server.tag.entity.Tag;

@Mapper(componentModel = "spring")
public interface TagMapper {
	Tag tagPostDtoToTag(TagPostDto tagPostDto);
	TagResponseDto tagToTagResponseDto(Tag tag);
}
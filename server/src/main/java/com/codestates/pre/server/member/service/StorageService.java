package com.codestates.pre.server.member.service;

import org.springframework.web.multipart.MultipartFile;

public interface StorageService {
	void storeImage(MultipartFile file);
	void deleteImage(MultipartFile file);
}

// 인터페이스로 구현하여 리모트 서버에 저장할지, S3버킷에 저장할지 여부에 따라 코드 수정이 용이하도록
// 요구사항이 바뀌어도 기술 자체를 갖다가 바로바로 구현 수정이 가능하도록

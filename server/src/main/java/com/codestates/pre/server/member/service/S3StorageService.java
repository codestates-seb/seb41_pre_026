package com.codestates.pre.server.member.service;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.codestates.pre.server.exception.StorageException;
import com.sun.xml.bind.v2.TODO;

import lombok.Value;
import lombok.extern.slf4j.Slf4j;

// @Slf4j
// @Service
public class S3StorageService implements StorageService { // 클라우드 서비스(S3에 저장 할 경우)


	// private final Path rootLocation = Paths.get("${aws.s3.bucket}");

	@Override
	public void storeImage(MultipartFile file) {
		/* TODO S3 API를 이용해서 AWS S3로 업로드 한다.
		try {
			if (file.isEmpty()) {
				throw new StorageException("Failed to store empty file.");
			}
			Path destinationFile = this.rootLocation.resolve(
				Paths.get(file.getOriginalFilename())).normalize().toAbsolutePath();
			if (!destinationFile.getParent().equals(this.rootLocation.toAbsolutePath())) {
				throw new StorageException("Cannot store file outside current directory.");
			}
			try (InputStream inputStream = file.getInputStream()) {
				log.info("# store profile image!");
				Files.copy(inputStream, destinationFile, StandardCopyOption.REPLACE_EXISTING); //여기서 파일을 카피해서 저장하는 것
			}
		}
		catch (IOException e) {
			throw new StorageException("Failed to store file.", e);
		}

		 */
	}


	// 지우는건 어케하지 ㅜ??? ㅜㅜㅜ??
	public void deleteImage(MultipartFile file) {}
}
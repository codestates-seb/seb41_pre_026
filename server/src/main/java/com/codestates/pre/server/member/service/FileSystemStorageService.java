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

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class FileSystemStorageService implements StorageService { // 로컬 환경에 저장 할 경우 -> 리모트 서버에 저장할 땐 어케하징
	private final Path rootLocation = Paths.get("C:\\Users\\Gain\\Pictures\\Screenshots"); // 내 컴퓨터의 어디에서 파일 가져올지? 저장 할 파일의 경로? 모르겟다다다

	@Override
	public void storeImage(MultipartFile file) {
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
	}

	public void deleteImage(MultipartFile file) {}
}

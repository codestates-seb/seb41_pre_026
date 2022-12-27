### SERVER 요구사항

#### Member
- [ ] 로그인 기능 구현
  - password 암호화 -> 클라이언트, 서버 어디서 암호화할지 정하기
- [ ] JWT 이용 인가 구현
- [ ] 회원가입(등록) 기능
- [ ] 회원정보 수정 기능
- [ ] 회원정보 삭제 기능
- [ ] 회원정보 조회 기능
  - questionCount(질문포스트 개수), answerCount(댓글 단 개수) 조회가 가능해야 합니다.

#### Question
- [ ] 질문 전체조회 기능
  - url 파라미터로 page, size, type(tag)이 넘어옵니다
    - [ ] page, size 페이지네이션 기능 구현
    - [ ] type(tag) 기능 기능 구현
- [ ] 질문 상세 조회 (단일조회)
  - url 파라미터로 question-id, member_id가 넘어옵니다
  - body에 mid가 넘어옵니다
- [ ] 질문 등록 기능
- [ ] 질문 수정 기능
  - body에 mid가 같이 넘와와야 할듯??? -> 작성자와 수정자가 맞는지 검증하는 로직
- [ ] 질문 삭제 기능
  - [ ] 질문 작성자와 삭제요청을 보내는 사용자가 같은지 검증하는 로직 필요
- [ ] Answer의 영속성을 관리합니다 (casecade)

#### Answer
- [ ] 답변 등록 기능
  - requestBody로 questionId가 넘어옵니다
- [ ] 답변 수정 기능
  - requestBody로 answer를 받아 답변을 수정합니다.
- [ ] 답변 삭제 기능
  - url 파라미터로 answer-id 를 받아 해당 answer를 삭제합니다.
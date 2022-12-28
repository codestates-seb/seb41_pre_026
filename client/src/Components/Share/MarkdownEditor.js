import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import styled from "styled-components";
import React, { useState } from "react";

const Container = styled.div`
  width: 727px;
  padding: 8px;
`;

function MarkdownEditor() {
  const textRef = React.createRef();
  const [descriptions, setDescriptions] = useState("");
  const handleButtonClick = () => {
    setDescriptions({
      description: textRef.current.getInstance().getMarkdown(),
    });
  };
  console.log(descriptions); // 일단 버튼 눌렀을때 콘솔에 값 찍어서 확인가능하게 해둠
  return (
    <Container>
      <Editor
        ref={textRef} // input값을 가져오기 위해 ref생성
        previewStyle="vertical" // 미리보기 유형 (tab , vertical)
        initialValue="hello world" // input 입력 값. 지금은 placeholder마냥 들어가있음.
        height="400px" // 에디터의 높이값  width 값의 변경을 원한다면 상위 컴포넌트의 값을 변경
        autofocus={false} // 페이지 들어올 시 자동으로 포커스
        initialEditType="markdown" // 타입  : 'markdown' 과 일반 텍스트형태인 'wvsiwyg' 존재
        theme="dark" // 테마입니다 다크모드 가능
        useCommandShortcut={true}
        placeholder="내용을 입력해주세요 :)" // 아직 사용안되고 있는듯. 나중에 답변 수정시 사용예정
      />
      <button onClick={handleButtonClick}>Post Your Answer</button>
    </Container>
  );
}
export default MarkdownEditor;

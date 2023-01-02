import MDEditor from "@uiw/react-md-editor";
import styled from "styled-components";

const Container = styled.div``;
export default function Editor({ value, setValue, type }) {
  return (
    <Container>
      {type ? ( // type =1 : editor, 설정 안하면 preview
        <MDEditor value={value} onChange={setValue} preview={"edit"} />
      ) : (
        <MDEditor.Markdown source={value} style={{ whiteSpace: "pre-wrap" }} />
      )}
    </Container>
  );
}

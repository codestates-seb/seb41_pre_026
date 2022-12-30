import MDEditor from "@uiw/react-md-editor";
import styled from "styled-components";

const Container = styled.div`
  .preview {
    display: none;
  }
`;
export default function Editor({ value, setValue }) {
  return (
    <Container>
      <MDEditor value={value} onChange={setValue} preview={"edit"} />
      <MDEditor.Markdown
        className="preview"
        source={value}
        style={{ whiteSpace: "pre-wrap" }}
      />
    </Container>
  );
}

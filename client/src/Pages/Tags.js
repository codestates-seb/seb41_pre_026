import styled from "styled-components";
import Header from "../Components/Tags/Header";

const StyledTags = styled.section`
  width: 1037px;
  padding: 24px;
`;

function Tags() {
  return (
    <StyledTags>
      <Header />
    </StyledTags>
  );
}

export default Tags;

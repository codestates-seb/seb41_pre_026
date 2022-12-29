import styled from "styled-components";
import Header from "../Components/Tags/Header";
import TagContainer from "../Components/Tags/TagContainer";

const StyledTags = styled.section`
  width: 1037px;
  padding: 24px 0px 100px 24px;
`;

function Tags() {
  return (
    <StyledTags>
      <Header />
      <TagContainer />
    </StyledTags>
  );
}

export default Tags;

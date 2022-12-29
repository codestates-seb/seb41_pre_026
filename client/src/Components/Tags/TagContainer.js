import styled from "styled-components";
import TagItem from "./TagItem";
import { data } from "../../Assets/tagsData";

const StyledGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-gap: 10px;
`;

function TagContainer() {
  return (
    <StyledGrid>
      {data.map((tag) => (
        <TagItem key={tag.id} tag={tag} />
      ))}
    </StyledGrid>
  );
}

export default TagContainer;

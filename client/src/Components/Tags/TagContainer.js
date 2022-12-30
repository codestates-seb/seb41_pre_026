import styled from "styled-components";
import TagItem from "./TagItem";
import axios from "axios";
import { useState } from "react";

const StyledGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-gap: 10px;
`;

function TagContainer({ search }) {
  const [tags, setTags] = useState([]);
  axios
    .get("http://43.200.68.32:8080/tags")
    .then(function (response) {
      setTags(response.data.data);
    })
    .catch(function (error) {
      console.log(error);
    });

  return (
    <StyledGrid>
      {tags.map((tag) => (
        <TagItem key={tag.tagId} tag={tag} search={search} />
      ))}
    </StyledGrid>
  );
}

export default TagContainer;

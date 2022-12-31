import { useState } from "react";
import styled from "styled-components";
import Header from "../Components/Tags/Header";
import TagContainer from "../Components/Tags/TagContainer";

const StyledTags = styled.section`
  width: 1005px;
  padding: 24px 0px 100px 24px;
`;

function Tags() {
  const [search, setSearch] = useState("");

  const handleSearch = (search) => {
    setSearch(search);
  };

  return (
    <StyledTags>
      <Header search={search} handleSearch={handleSearch} />
      <TagContainer search={search} />
    </StyledTags>
  );
}

export default Tags;

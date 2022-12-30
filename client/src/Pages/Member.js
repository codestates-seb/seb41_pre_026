import { useState } from "react";
import styled from "styled-components";
import Header from "../Components/Member/Header";
import Profile from "../Components/Member/Profile";
import Settings from "../Components/Member/Settings";

const StyledMember = styled.section`
  width: 1037px;
  padding: 24px 10px 24px 24px;
  display: flex;
  flex-direction: column;
`;

function Member() {
  const [selected, setSelected] = useState(true);

  const handleSelect = () => {
    setSelected(!selected);
  };

  return (
    <StyledMember>
      <Header handleSelect={handleSelect} />
      {selected ? <Profile /> : <Settings />}
    </StyledMember>
  );
}

export default Member;

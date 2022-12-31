import { useState } from "react";
import styled from "styled-components";
import Header from "../Components/Member/Header";
import Profile from "../Components/Member/Profile";
import Settings from "../Components/Member/Settings";

const StyledMember = styled.section`
  width: 1037px;
  padding: 24px 24px 24px 24px;
  display: flex;
  flex-direction: column;
`;

function Member() {
  const [selected, setSelected] = useState("1");
  const [toEdit, setToEdit] = useState(false);

  const handleSelect = (select) => {
    setSelected(select);
  };

  const handleToEdit = (gotoEdit) => {
    setToEdit(gotoEdit);
  };

  return (
    <StyledMember>
      <Header handleSelect={handleSelect} handleToEdit={handleToEdit} />
      {selected === "1" ? (
        <Profile />
      ) : (
        <Settings toEdit={toEdit} handleToEdit={handleToEdit} />
      )}
    </StyledMember>
  );
}

export default Member;

import { useState } from "react";
import styled from "styled-components";
import Header from "../Components/Member/Header";
import Profile from "../Components/Member/Profile";
import Settings from "../Components/Member/Settings";
import Cookie from "../util/cookie";

const StyledMember = styled.section`
  width: 1037px;
  padding: 24px 24px 24px 24px;
  display: flex;
  flex-direction: column;
`;

function Member() {
  const [selected, setSelected] = useState("1");
  const [toEdit, setToEdit] = useState(false);
  const cookie = new Cookie();
  const userId = cookie.get("userId");

  const handleSelect = (select) => {
    setSelected(select);
  };

  const handleToEdit = (gotoEdit) => {
    setToEdit(gotoEdit);
  };

  return (
    <StyledMember>
      <Header
        handleSelect={handleSelect}
        handleToEdit={handleToEdit}
        userId={userId}
      />
      {selected === "1" ? (
        <Profile userId={userId} />
      ) : (
        <Settings toEdit={toEdit} handleToEdit={handleToEdit} userId={userId} />
      )}
    </StyledMember>
  );
}

export default Member;

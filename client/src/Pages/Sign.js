import styled from "styled-components";
import Guide from "../Components/Sign/Guide";
import SignForm from "../Components/Sign/SignForm";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 752px;
`;
function Sign() {
  return (
    <StyledDiv>
      <Guide />
      <SignForm />
    </StyledDiv>
  );
}

export default Sign;

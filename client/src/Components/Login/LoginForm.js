import styled from "styled-components";
import { StyledBlueBtn } from "../Share/Button";
import LoginInput from "./LoginInput";

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 316px;
  height: 240px;
  border: 1px solid #dedfdf;
  border-radius: 5px;
  padding: 24px;
  box-shadow: 0px 7px 35px 18px #dedfdf, 1px 2px 1px 1px #dedfdf;
  label {
    display: block;
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 5px;
    cursor: pointer;
  }

  button {
    margin: 10px 0px 0px 0px;
    padding: 8px;
    font-weight: 400;
  }
`;

function LoginForm({ handleLogin }) {
  return (
    <StyledForm>
      <LoginInput label="Email" />
      <LoginInput label="Password" />
      <StyledBlueBtn onClick={handleLogin}>Log in</StyledBlueBtn>
    </StyledForm>
  );
}

export default LoginForm;

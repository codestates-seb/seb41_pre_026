import styled from "styled-components";
import { StyledBlueBtn } from "../Share/Button";
import SginInput from "./SignInput";

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 316px;
  height: 644px;
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
  p {
    margin: 0px;
    font-size: 11.6px;
    color: #7b838b;
  }
`;

function SignForm() {
  return (
    <StyledForm>
      <SginInput label="Display Name" />
      <SginInput label="Email" />
      <SginInput label="Password" />
      <p>
        Passwords must contain at least eight characters,
        <br />
        including at least 1 letter and 1 number.
      </p>
      <StyledBlueBtn>Sign up</StyledBlueBtn>
    </StyledForm>
  );
}

export default SignForm;

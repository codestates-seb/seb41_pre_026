import { useState } from "react";
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

  span {
    font-size: 12px;
    color: red;
    margin: 0px 0px 0px 3px;
  }
`;

function LoginForm({ handleLogin }) {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleId = (e) => setId(e.target.value);
  const handlePw = (e) => setPw(e.target.value);
  const handleSubmit = () => {
    const idRegExp =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (!idRegExp.test(id)) {
      console.log("e");
    }
  };

  return (
    <StyledForm>
      <LoginInput
        value={id}
        handleId={handleId}
        place="aaa@bbb.ccc"
        label="Email"
      />
      <LoginInput
        value={pw}
        handlePw={handlePw}
        place="Write.."
        label="Password"
      />
      <StyledBlueBtn onClick={handleSubmit}>Log in</StyledBlueBtn>
    </StyledForm>
  );
}

export default LoginForm;

import { useState } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  height: 32px;
  border-radius: 3px;
  border: 1px solid red;
  padding: 0px 0px 1px 5px;

  :focus {
    outline: none;
    border: 1px solid #6bbbf7;
    box-shadow: 0px 0px 4px 4px #d3e5f2;
  }
  ::placeholder {
    font-size: 12px;
    line-height: 2;
  }
`;
function LoginInput({
  label,
  place,
  handleId,
  handlePw,
  checkId,
  checkPw,
  refs,
  handleSubmit,
}) {
  const [isFocused, setIsFocused] = useState(false);
  const checkType = () => (label === "Email" ? checkId : checkPw);
  return (
    <form>
      <label htmlFor={label}>{label}</label>
      <input hidden="hidden" />
      <StyledInput
        autoComplete="off"
        className={checkType() ? "margin" : ""}
        isFocused={isFocused}
        type={label === "Email" ? "text" : "password"}
        id={label}
        placeholder={place ? place : null}
        onFocus={() => setIsFocused(!isFocused)}
        onBlur={() => setIsFocused(!isFocused)}
        onChange={label === "Email" ? handleId : handlePw}
        onKeyUp={(e) => (e.keyCode === 13 ? handleSubmit() : null)}
        ref={label === "Email" ? refs[0] : refs[1]}
      ></StyledInput>
      <span className={checkType() ? "none" : ""}>{label} is not valid</span>
    </form>
  );
}

export default LoginInput;

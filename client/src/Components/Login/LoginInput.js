import { useState } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  height: 28px;
  border-radius: 3px;
  border: 1px solid #babfc4;
  padding: 0px 0px 3px 0px;

  :focus {
    outline: none;
    border: 1px solid #6bbbf7;
    box-shadow: 0px 0px 4px 4px #d3e5f2;
  }
  ::placeholder {
    font-size: 11px;
    padding: 0px 0px 0px 5px;
    line-height: 2;
  }
`;
function LoginInput({ label, place, handleId, handlePw }) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <StyledInput
        isFocused={isFocused}
        type="text"
        id={label}
        placeholder={place ? place : null}
        onFocus={() => setIsFocused(!isFocused)}
        onBlur={() => setIsFocused(!isFocused)}
        onChange={label === "Email" ? handleId : handlePw}
      ></StyledInput>
      <span>{label} is not valid</span>
    </div>
  );
}

export default LoginInput;

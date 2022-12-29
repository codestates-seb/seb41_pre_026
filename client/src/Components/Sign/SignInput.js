import styled from "styled-components";
import { useState } from "react";

const StyledInput = styled.input`
  width: 100%;
  height: 33px;
  border: 1px solid#babfc4;
  border-radius: 3px;
  margin-bottom: 10px;
  border: 1px solid #babfc4;
  :focus {
    outline: none;
    border: 1px solid #6bbbf7;
    box-shadow: 0px 0px 4px 4px #d3e5f2;
  }
`;
function SignInput({ label, handler }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <StyledInput
        isFocused={isFocused}
        type="text"
        id={label}
        onFocus={() => setIsFocused(!isFocused)}
        onBlur={() => setIsFocused(!isFocused)}
        onChange={(e) => handler(e.target.value)}
      ></StyledInput>
    </div>
  );
}

export default SignInput;

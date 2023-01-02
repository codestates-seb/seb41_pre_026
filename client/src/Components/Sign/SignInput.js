import styled from "styled-components";
import { useState } from "react";

const StyledInput = styled.input`
  width: 100%;
  height: 33px;
  border-radius: 3px;
  border: 1px solid #babfc4;
  padding: 0px 0px 0px 5px;
  :focus {
    outline: none;
    border: 1px solid #6bbbf7 !important;
    box-shadow: 0px 0px 4px 4px #d3e5f2;
  }
  ::placeholder {
    font-size: 12px;
    line-height: 2;
  }
`;
function SignInput({ label, handler, place, check, refs }) {
  const [isFocused, setIsFocused] = useState(false);

  const insertRef = () => {
    if (label === "Display Name") return 0;
    else if (label === "Email") return 1;
    return 2;
  };

  return (
    <form>
      <label htmlFor={label}>{label}</label>
      <input hidden="hidden" />
      <StyledInput
        className={check ? "margin" : "border"}
        autoComplete="off"
        isFocused={isFocused}
        type={label === "Password" ? "password" : "text"}
        id={label}
        onFocus={() => setIsFocused(!isFocused)}
        onBlur={() => setIsFocused(!isFocused)}
        onChange={(e) => handler(e.target.value)}
        placeholder={place}
        ref={(el) => (refs.current[insertRef()] = el)}
      ></StyledInput>
      <span className={check ? "none" : "guide"}>{label} is not valid</span>
    </form>
  );
}

export default SignInput;

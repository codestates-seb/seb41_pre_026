import styled from "styled-components";
import { StyledBlueBtn } from "../Share/Button";
import SginInput from "./SignInput";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";

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
    a {
      font-size: 12px;
      text-decoration: none;
      color: #367ad6;
      :hover {
        color: #0f92e1;
      }
    }
  }

  .capcha {
    width: 266px;
    height: 150px;
    display: flex;
    justify-content: center;
    border: 1px solid #e3e6e8;
    margin: 20px 0px 20px 0px;
    padding: 5px 0px 0px 0px;
  }

  .check {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    span {
      font-size: 11px;
    }
    svg {
      margin: 2px 0px 0px 31px;
      fill: #6a737c;
    }
  }
`;

function SignForm() {
  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const handleNickName = (value) => {
    setNickName(value);
    console.log(nickName);
  };

  const handleEmail = (value) => {
    setEmail(value);
    console.log(email);
  };

  const handlePwd = (value) => {
    setPwd(value);
    console.log(pwd);
  };

  const handleSubmit = () => {
    console.log("submit");
  };

  return (
    <StyledForm>
      <SginInput label="Display Name" handler={handleNickName} />
      <SginInput label="Email" handler={handleEmail} />
      <SginInput label="Password" handler={handlePwd} />
      <p>
        Passwords must contain at least eight characters,
        <br />
        including at least 1 letter and 1 number.
      </p>
      <ReCAPTCHA
        size="compact"
        sitekey={process.env.REACT_APP_SITE_KEY}
        onChange={(e) => console.log(e.target.value)}
        className="capcha"
        lang="en"
      />
      <div className="check">
        <input type="checkbox" />
        <span>
          Opt-in to receive occasional product <br />
          updates, user research invitations, <br />
          company announcements, and digests.
        </span>
        <svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14">
          <path d="M7 1C3.74 1 1 3.77 1 7c0 3.26 2.77 6 6 6 3.27 0 6-2.73 6-6s-2.73-6-6-6Zm1.06 9.06c-.02.63-.48 1.02-1.1 1-.57-.02-1.03-.43-1.01-1.06.02-.63.5-1.04 1.08-1.02.6.02 1.05.45 1.03 1.08Zm.73-3.07-.47.3c-.2.15-.36.36-.44.6a3.6 3.6 0 0 0-.08.65c0 .04-.03.14-.16.14h-1.4c-.14 0-.16-.09-.16-.13-.01-.5.11-.99.36-1.42A4.6 4.6 0 0 1 7.7 6.07c.15-.1.21-.21.3-.33.18-.2.28-.47.28-.74.01-.67-.53-1.14-1.18-1.14-.9 0-1.18.7-1.18 1.46H4.2c0-1.17.31-1.92.98-2.36a3.5 3.5 0 0 1 1.83-.44c.88 0 1.58.16 2.2.62.58.42.88 1.02.88 1.82 0 .5-.17.9-.43 1.24-.15.2-.44.47-.86.79h-.01Z"></path>
        </svg>
      </div>
      <StyledBlueBtn onClick={handleSubmit}>Sign up</StyledBlueBtn>
      <p>
        By clicking “Sign up”, you agree to our&nbsp;
        <a href="https://stackoverflow.com/legal/terms-of-service/public">
          terms of service, privacy policy&nbsp;
        </a>
        and{" "}
        <a href="https://stackoverflow.com/legal/cookie-policy">
          cookie policy
        </a>
      </p>
    </StyledForm>
  );
}

export default SignForm;

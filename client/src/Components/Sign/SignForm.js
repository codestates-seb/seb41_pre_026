import styled from "styled-components";
import { StyledBlueBtn } from "../Share/Button";
import SginInput from "./SignInput";
import { ReCAPTCHA } from "react-google-recaptcha";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 316px;
  height: auto;
  border: 1px solid #dedfdf;
  border-radius: 5px;
  padding: 24px;
  box-shadow: 0px 7px 35px 18px #dedfdf, 1px 2px 1px 1px #dedfdf;
  margin: 90px 0px 0px 0px;
  label {
    display: block;
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 5px;
    cursor: pointer;
  }

  button {
    margin: 10px 0px 10px 0px;
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
    margin: 0px 0px 5px 0px;
    span {
      font-size: 11px !important;
      color: black !important;
    }
    svg {
      margin: 2px 0px 0px 31px;
      fill: #6a737c;
    }
  }

  .guide {
    padding: 0px 0px 0px 5px;
    font-size: 12px;
    color: #d03c3e;
  }

  .none {
    display: none;
  }

  .margin {
    margin: 0px 0px 10px 0px;
  }

  .border {
    border: 1px solid #d03c3e;
  }
`;

function SignForm() {
  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [checkName, setCheckName] = useState(false);
  const [checkEmail, setCheckEmail] = useState(false);
  const [checkPwd, setCheckPwd] = useState(false);
  const refs = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    const idRegExp =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    if (nickName.length > 0) {
      setCheckName(true);
    } else {
      setCheckName(false);
    }

    if (idRegExp.test(email)) {
      setCheckEmail(true);
    } else {
      setCheckEmail(false);
    }

    if (pwd.length >= 8) {
      setCheckPwd(true);
    } else {
      setCheckPwd(false);
    }
  }, [email, pwd, nickName]);

  const handleNickName = (value) => {
    setNickName(value);
    // console.log(nickName);
  };

  const handleEmail = (value) => {
    setEmail(value);
    // console.log(email);
  };

  const handlePwd = (value) => {
    setPwd(value);
    // console.log(pwd);
  };

  const handleSubmit = () => {
    if (!checkName) {
      refs.current[0].focus();
      return;
    }

    if (!checkEmail) {
      refs.current[1].focus();
      return;
    }

    if (!checkPwd) {
      refs.current[2].focus();
      return;
    }

    axios
      .post(
        "http://ec2-43-200-68-32.ap-northeast-2.compute.amazonaws.com:8080/members",
        {
          name: nickName,
          email: email,
          password: pwd,
        }
      )
      .then((res) => {
        console.log(res);
        navigate("/login");
      })
      .catch((e) => console.log(e));
  };

  return (
    <StyledForm>
      <SginInput
        label="Display Name"
        handler={handleNickName}
        place="Write.."
        check={checkName}
        refs={refs}
      />
      <SginInput
        label="Email"
        handler={handleEmail}
        place="aaa@bbb.ccc"
        check={checkEmail}
        refs={refs}
      />
      <SginInput
        label="Password"
        handler={handlePwd}
        place="Write.."
        check={checkPwd}
        refs={refs}
      />
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

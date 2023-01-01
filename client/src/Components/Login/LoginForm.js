import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { StyledBlueBtn } from "../Share/Button";
import LoginInput from "./LoginInput";
import axios from "axios";
import Cookie from "../../util/cookie";
import { useNavigate } from "react-router-dom";

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 316px;
  height: auto;
  border: 1px solid #dedfdf;
  border-radius: 5px;
  padding: 35px 25px 35px 25px;
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

  .none {
    display: none;
  }

  .margin {
    margin: 0px 0px 15px 0px;
    border: 1px solid #babfc4;
  }
`;

function LoginForm({ handleLogin }) {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [checkId, setCheckId] = useState(false);
  const [checkPw, setCheckPw] = useState(false);
  const idInput = useRef(null);
  const pwInput = useRef(null);
  const navgatie = useNavigate();
  const cookie = new Cookie();

  const handleId = (e) => setId(e.target.value);
  const handlePw = (e) => setPw(e.target.value);

  useEffect(() => {
    const idRegExp =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (idRegExp.test(id)) {
      setCheckId(true);
    } else {
      setCheckId(false);
    }

    if (pw.length >= 8) {
      setCheckPw(true);
    } else {
      setCheckPw(false);
    }
  }, [id, pw]);

  const handleSubmit = () => {
    if (!checkId) {
      idInput.current.focus();
      return;
    }

    if (!checkPw) {
      pwInput.current.focus();
      return;
    }

    axios
      .post(
        "http://ec2-43-200-68-32.ap-northeast-2.compute.amazonaws.com:8080/member",
        {
          username: id,
          password: pw,
        }
      )
      .then((res) => {
        cookie.set("access", res.headers.authorization);
        cookie.set("refresh", res.headers.refresh);
        cookie.set("userId", res.data.memberId);
        handleLogin(cookie.get("userId"));
        navgatie("/");
      })
      .catch((e) => console.log(e));
  };

  return (
    <StyledForm>
      <LoginInput
        handleId={handleId}
        place="aaa@bbb.ccc"
        label="Email"
        checkId={checkId}
        refs={[idInput, pwInput]}
        handleSubmit={handleSubmit}
      />
      <LoginInput
        handlePw={handlePw}
        place="Write.."
        label="Password"
        checkPw={checkPw}
        refs={[idInput, pwInput]}
        handleSubmit={handleSubmit}
      />
      <StyledBlueBtn onClick={handleSubmit}>Log in</StyledBlueBtn>
    </StyledForm>
  );
}

export default LoginForm;

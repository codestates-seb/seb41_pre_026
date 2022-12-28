import { Link } from "react-router-dom";
import styled from "styled-components";
import LoginForm from "../Components/Login/LoginForm";

const StyledDiv = styled.div`
  padding: 0px 0px 120px 0px;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
  svg {
    margin: 0px 0px 25px 0px;
  }
  p {
    font-size: 13px;
    margin: 35px 0px 0px 0px;
  }

  p a {
    color: #367ad6;
    text-decoration: none;
    font-size: 13px;
    margin: 0px 0px 0px 3px;
    :hover {
      color: #0f92e1;
    }
  }
`;

function Login() {
  return (
    <StyledDiv>
      <svg width="32" height="37" viewBox="0 0 32 37">
        <path d="M26 33v-9h4v13H0V24h4v9h22Z" fill="#BCBBBB"></path>
        <path
          d="m21.5 0-2.7  2 9.9 13.3 2.7-2L21.5 0ZM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5ZM9.1 15.2l15 7 1.4-3-15-7-1.4 3Zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99ZM23 30H7v-3h16v3Z"
          fill="#F48024"
        ></path>
      </svg>
      <LoginForm></LoginForm>
      <p>
        Don’t have an account?<Link to={"/sign"}>Sign up</Link>
      </p>
    </StyledDiv>
  );
}

export default Login;

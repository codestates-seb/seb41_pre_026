import styled from "styled-components";
import { useState } from "react";
import EditProfile from "./EditProfile";
import DeleteProfile from "./DeleteProfile";

const StyledSettings = styled.div`
  display: flex;
  margin: 0px 0px 0px 10px;
  padding: 10px 0px 0px 0px;
`;

const StyledSideBar = styled.ul`
  display: flex;
  flex-direction: column;
  width: 186px;
  margin: 0px 20px 0px 0px;
  padding: 0px;

  p {
    font-size: 12px;
    color: #232629;
    font-weight: 700;
  }
`;

const StyledBtnDiv = styled.div`
  display: flex;
  flex-direction: column;

  button {
    height: 29px;
    font-size: 13px;
    line-height: 17px;
    color: #525960;
    cursor: pointer;
    border: none;
    background-color: #ffffff;
    border-radius: 40px;
    padding: 6px 12px 6px 12px;
    margin: 0px 5px 0px 0px;
    text-align: left;
  }

  button:hover {
    background-color: #e3e6e8;
  }

  button:nth-of-type(${({ select }) => select}) {
    color: #ffffff;
    background-color: #f48225;
  }
`;

function Settings() {
  const [selecBtn, setSelecBtn] = useState(1);

  const handleBtnColor = (e) => {
    setSelecBtn(e.target.id);
  };

  return (
    <StyledSettings>
      <StyledSideBar>
        <p>Personal Information</p>
        <StyledBtnDiv select={selecBtn}>
          <button id="1" onClick={handleBtnColor}>
            Edit profile
          </button>
          <button id="2" onClick={handleBtnColor}>
            Delete profile
          </button>
        </StyledBtnDiv>
      </StyledSideBar>
      {Number(selecBtn) === 1 ? <EditProfile /> : <DeleteProfile />}
    </StyledSettings>
  );
}

export default Settings;

import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { StyledWhiteBtn } from "../Share/Button";
import profile from "../../Assets/profile.jpg";
import cake from "../../Assets/cake.png";
import clock from "../../Assets/clock.png";

const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0px 0px 10px 0px;
`;

const StyledMemberWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0px 0px 10px 0px;

  button {
    padding: 9.6px;
  }
`;

const StyledMemberInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  img {
    width: 145px;
    height: 145px;
    margin: 8px 8px 8px 8px;
    border-radius: 3px;
  }

  .info {
    margin: 0px 0px 13px 10px;

    .name {
      margin: 4px 0px 0px 0px;

      span {
        font-size: 34px;
        color: #232629;
        margin: 0px 0px 0px 0px;
      }
    }

    ul {
      display: flex;
      list-style-type: none;
      margin: 0px 0px 0px 0px;
      padding: 0px;

      li {
        margin: 0px 0px 0px 0px;
        color: #6a737c;
        display: flex;
        justify-content: center;
        align-self: center;

        img {
          width: 23px;
          height: 20px;
          margin: 8px 0px 8px 0px;
        }

        div {
          margin: 8px 2px 8px 0px;
          font-size: 13px;
        }
      }
    }
  }
`;

const StyledBtnDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0px 0px 0px 9px;

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
  }

  button:hover {
    background-color: #e3e6e8;
  }

  button:nth-of-type(${({ select }) => select}) {
    color: #ffffff;
    background-color: #f48225;
  }
`;

function Header({ handleSelect, handleToEdit, userId }) {
  const [selecBtn, setSelecBtn] = useState(1);
  const [memberInfo, setMemberInfo] = useState([]);

  const handleBtn = (e) => {
    setSelecBtn(e.target.id);
    handleSelect(e.target.id);
  };

  const handleEditBtn = (e) => {
    setSelecBtn("2");
    handleSelect("2");
    handleToEdit(true);
  };

  axios
    .get(
      `http://ec2-43-200-68-32.ap-northeast-2.compute.amazonaws.com:8080/members/${userId}`
    )
    .then(function (response) {
      setMemberInfo(response.data.data);
    })
    .catch(function (error) {
      console.log(error);
    });

  return (
    <StyledHeader>
      <StyledMemberWrapper>
        <StyledMemberInfo>
          <img src={profile} alt="profile" />
          <div className="info">
            <div className="name">
              <span>{memberInfo.name}</span>
            </div>
            <ul>
              <li>
                <img src={cake} alt="cake" />
                <div>Member for 12 days</div>
              </li>
              <li>
                <img src={clock} alt="clock" />
                <div>Last seen this week</div>
              </li>
            </ul>
          </div>
        </StyledMemberInfo>
        <div>
          <StyledWhiteBtn onClick={handleEditBtn}>Edit Profile</StyledWhiteBtn>
        </div>
      </StyledMemberWrapper>
      <StyledBtnDiv select={selecBtn}>
        <button id="1" onClick={handleBtn}>
          Profile
        </button>
        <button id="2" onClick={handleBtn}>
          Settings
        </button>
      </StyledBtnDiv>
    </StyledHeader>
  );
}

export default Header;

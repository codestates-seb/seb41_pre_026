import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { StyledBlueBtn, StyledTransBlueBtn } from "../Share/Button";

const StyledEdit = styled.div`
  width: 830px;

  .edit {
    border-bottom: 1px solid #d6d9dc;
    margin: 0px 0px 24px 0px;
    font-size: 27px;
    padding: 0px 0px 16px 0px;
    color: #0c0d0e;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;

  .public {
    margin: 0px 0px 8px 0px;
    font-size: 19px;
    color: #232629;
  }
`;

const StyleForm = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  border: 1px solid #e3e6e8;
  border-radius: 3px;
  margin: 0px 0px 20px 0px;
`;

const StyledImg = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 0px 10px 0px;

  p {
    font-size: 14px;
    margin: 0px 0px 3px 0px;
    font-weight: 600;
  }

  img {
    width: 164px;
    height: 164px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
  }

  button {
    width: 164px;
    height: 33px;
    font-size: 13px;
    background-color: #525960;
    color: #ffffff;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    cursor: pointer;
    border: 0px;
  }
`;

const StyledName = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: 14px;
    margin: 0px 0px 5px 0px;
    font-weight: 600;
  }

  input {
    width: 421px;
    height: 34px;
    font-size: 13px;
    border: 1px solid #babfc3;
    border-radius: 3px;
    padding: 7.8px 9.1px;
  }

  input:focus {
    border: 1px solid #379fef;
    outline: 4px solid #e1ecf4;
  }
`;

const StyledBtnDiv = styled.div`
  button:nth-child(2) {
    margin: 0px 0px 0px 16px;
  }
`;

function EditProfile({ userId }) {
  const [img, setImg] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    axios
      .get(
        `http://ec2-43-200-68-32.ap-northeast-2.compute.amazonaws.com:8080/members/${userId}`
      )
      .then(function (response) {
        setName(response.data.data.name);
        setImg(response.data.data.profileImage);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [userId]);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    axios
      .patch(
        `http://ec2-43-200-68-32.ap-northeast-2.compute.amazonaws.com:8080/members/${userId}`,
        {
          memberId: userId,
          name: name,
        }
      )
      .then(function (response) {
        console.log(response.data.data.name);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleCancel = () => {
    axios
      .get(
        `http://ec2-43-200-68-32.ap-northeast-2.compute.amazonaws.com:8080/members/${userId}`
      )
      .then(function (response) {
        setName(response.data.data.name);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <StyledEdit>
      <div className="edit">Edit your Profile</div>
      <StyledDiv>
        <div className="public">Public information</div>
        <StyleForm>
          <StyledImg>
            <p>Profile Image</p>
            <img src={img} alt="profile" />
            <button>Change picture</button>
          </StyledImg>
          <StyledName>
            <p>Display Name</p>
            <input value={name} onChange={handleChange}></input>
          </StyledName>
        </StyleForm>
        <StyledBtnDiv>
          <StyledBlueBtn onClick={handleSubmit}>Save Profile</StyledBlueBtn>
          <StyledTransBlueBtn onClick={handleCancel}>Cancel</StyledTransBlueBtn>
        </StyledBtnDiv>
      </StyledDiv>
    </StyledEdit>
  );
}

export default EditProfile;

import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import Editor from "../Share/Editor";

const StyledProfile = styled.div`
  display: flex;
  margin: 0px 0px 200px 10px;
  padding: 10px 0px 0px 0px;
`;

const StyledStatsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  p {
    color: #232629;
    font-size: 21px;
    margin: 0px 0px 8px 0px;
  }
`;

const StyledStats = styled.div`
  display: flex;
  width: 244px;
  border: 1px solid #d6d9dc;
  border-radius: 5px;
  padding: 12px;
  margin: 0px 25px 0px 0px;
`;

const StyledCard = styled.div`
  width: 101px;
  height: 39px;
  margin: 0px 0px 0px 0px;

  p:nth-child(1) {
    margin: 0px 0px 0px 0px;
    font-size: 17px;
  }

  p:nth-child(2) {
    margin: 0px 0px 0px 0px;
    font-size: 13px;
    color: #6a737c;
  }
`;

const StyledAboutWrapper = styled.div`
  display: flex;
  flex-direction: column;

  p {
    color: #232629;
    font-size: 21px;
    margin: 0px 0px 8px 0px;
  }
`;

const StyledAbout = styled.div`
  width: 727px;
  height: 130px;
  border: 1px solid #d6d9dc;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 3px 20px 3px 20px;

  .wmde-markdown > p {
    font-size: 15px;
  }
`;

function Profile({ userId }) {
  const [memberInfo, setMemberInfo] = useState([]);

  axios
    .get(
      `http://ec2-43-200-68-32.ap-northeast-2.compute.amazonaws.com:8080/members/${userId}`
    )
    .then((res) => {
      setMemberInfo(res.data.data);
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <StyledProfile>
      <StyledStatsWrapper>
        <p>Stats</p>
        <StyledStats>
          <StyledCard>
            <p>{memberInfo.answerCount}</p>
            <p>answers</p>
          </StyledCard>
          <StyledCard>
            <p>{memberInfo.questionCount}</p>
            <p>questions</p>
          </StyledCard>
        </StyledStats>
      </StyledStatsWrapper>
      <StyledAboutWrapper>
        <p>About</p>
        <StyledAbout>
          <Editor value={memberInfo.profileText} />
        </StyledAbout>
      </StyledAboutWrapper>
    </StyledProfile>
  );
}

export default Profile;

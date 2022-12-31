import styled from "styled-components";
import axios from "axios";
import { useState } from "react";

const StyledProfile = styled.div`
  display: flex;
  margin: 0px 0px 0px 10px;
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

const StyledPostsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  p {
    color: #232629;
    font-size: 21px;
    margin: 0px 0px 8px 0px;
  }
`;

const StyledPosts = styled.div`
  width: 727px;
  height: 398px;
  border: 1px solid #d6d9dc;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;

function Profile() {
  const [memberInfo, setMemberInfo] = useState([]);

  axios
    .get(
      "http://ec2-43-200-68-32.ap-northeast-2.compute.amazonaws.com:8080/members/14"
    )
    .then(function (response) {
      setMemberInfo(response.data.data);
    })
    .catch(function (error) {
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
      <StyledPostsWrapper>
        <p>Posts</p>
        <StyledPosts></StyledPosts>
      </StyledPostsWrapper>
    </StyledProfile>
  );
}

export default Profile;

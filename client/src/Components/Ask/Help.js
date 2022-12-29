import styled from "styled-components";
import pencil from "../../Assets/pencil.png";

const StyledDiv = styled.div`
  width: 350px;
  border: 1px solid #d7d9dc;
  margin: 0px 0px 0px 20px;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 4px 0px, rgba(0, 0, 0, 0.05) 0px 2px 8px 0px;
  color: #232629;

  div:first-child {
    background-color: #f8f9f9;
    padding: 12px;
    border-bottom: 1px solid #d7d9dc;
    font-size: 15px;
  }
`;

const StyledContentDiv = styled.div`
  display: flex;
  margin: 16px;

  img {
    width: 65px;
    height: 70px;
  }

  div:nth-child(2) {
    font-size: 12px;
    white-space: pre-line;
  }
`;

function Help({ title, content }) {
  return (
    <StyledDiv>
      <div>{title}</div>
      <StyledContentDiv>
        <img src={pencil} alt="pencil"></img>
        <div>{content}</div>
      </StyledContentDiv>
    </StyledDiv>
  );
}

export default Help;

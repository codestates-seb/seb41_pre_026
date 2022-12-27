import styled from "styled-components";

const StyledWrapper = styled.div`
  width: 790px;
  background-color: #ffffff;
  margin: 0px 0px 6px 0px;
  padding: 24px;
  border: 1px solid #e4e6e8;
  border-radius: 3px;
  color: #232629;
  display: flex;
  flex-direction: column;

  label:first-child {
    color: #0c0d02;
    font-size: 15px;
    font-weight: 600;
  }

  label:nth-child(2) {
    color: #3b4045;
    font-size: 12px;
  }

  input {
    width: 100%;
    border: 1px solid #babfc3;
  }
`;

function Title() {
  return (
    <StyledWrapper>
      <label htmlFor="title">Title</label>
      <label htmlFor="title">
        Be specific and imagine you’re asking a question to another person.
      </label>
      <input></input>
    </StyledWrapper>
  );
}

export default Title;

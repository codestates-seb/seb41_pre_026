import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;

  div {
    width: 1215px;
    height: 130px;
    background-image: url("https://cdn.sstatic.net/Img/ask/background.svg?v=2e9a8205b368");
    background-repeat: no-repeat;
    background-position: right bottom;
    display: flex;
    align-items: center;
    margin: 0px 0px 13px 0px;

    h1 {
      color: #232629;
      font-size: 27px;
      margin: 24px 0px 27px 0px;
    }
  }
`;

const StyledHelp = styled.section`
  width: 850px;
  background-color: #ebf4fb;
  margin: 0px 0px 6px 0px;
  padding: 24px;
  border: 1px solid #a6ceed;
  border-radius: 3px;
  color: #3b4045;

  h2 {
    color: #232629;
    font-size: 21px;
    line-height: 27px;
    font-weight: 400;
    margin: 0px 0px 8px 0px;
  }

  p {
    font-size: 15px;
    line-height: 19px;
    margin: 0px;
  }

  h5 {
    font-size: 13px;
    line-height: 17px;
    font-weight: 600;
    margin: 15px 0px 8px 0px;
  }

  ul {
    font-size: 13px;
    line-height: 17px;
    margin: 0px 30px 0px 0px;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <div>
        <h1>Ask a public question</h1>
      </div>
      <StyledHelp>
        <h2>Writing a good question</h2>
        <p>
          You’re ready to ask a programming-related question and this form will
          help guide you through the process.
        </p>
        <p>
          Looking to ask a non-programming question? See the topics here to find
          a relevant site.
        </p>
        <h5>Steps</h5>
        <ul>
          <li>Summarize your problem in a one-line title.</li>
          <li>Describe your problem in more detail.</li>
          <li>Describe what you tried and what you expected to happen.</li>
          <li>
            Add “tags” which help surface your question to members of the
            community.
          </li>
          <li>Review your question and post it to the site.</li>
        </ul>
      </StyledHelp>
    </StyledHeader>
  );
}

export default Header;

import styled from "styled-components";

const Container = styled.div`
  max-width: 1100px;
  width: calc(100% - 164px);
  background-color: ffffff;
  border-radius: 0;
  border: 1px solid #d6d9dc;
  border-top-width: 0;
  border-bottom-width: 0;
  border-left-width: 1px;
  border-right-width: 0;
  padding: 24px;
  box-sizing: border-box;
  display: flex;
  .question-header {
    flex-flow: row nowrap;
    justify-content: space-between;
    margin-bottom: 0;
    p {
      font-size: 2rem;
      line-height: 1.35;
      font-weight: normal;
      margin-bottom: 8px !important;
    }
  }
`;
function View() {
  return (
    <Container>
      <div className="question-header">
        <p>Close to end of the page, element needs to disappear</p>
        <a href="/">Ask Question</a>
      </div>
      <div>
        <div>
          <span>Asked</span>
          <span>9 days ago</span>
        </div>
        <div>
          <span>Modified</span>
          <span>5 days ago</span>
        </div>
        <div>
          <span>Viewed</span>
          <span>92 times</span>
        </div>
      </div>
    </Container>
  );
}
export default View;

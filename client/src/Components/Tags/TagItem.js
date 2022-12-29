import styled from "styled-components";

const StyledDiv = styled.div`
  grid-template-columns: repeat(4, minmax(0, 1fr));
  border: 0.5px solid #d6d9dc;
  display: inline-block;
  font-size: 12px;
  border-radius: 3px;

  .tagContainer {
    width: 245px;
    height: 176px;
    padding: 12px;
  }

  .tagName {
    display: flex;
    justify-content: space-between;
    margin: 0px 0px 0px 0px;

    .tagSpan {
      background-color: #e1ecf4;
      color: #39739d;
      border-radius: 2px;
      padding: 5px 6px;
    }
  }

  .tagExplain {
    margin: 12px 0px 12px 0px;
    color: #3b4045;
  }

  .total {
    width: 85px;
    color: #838c95;
  }
`;

function TagItem({ tag }) {
  return (
    <StyledDiv>
      <div className="tagContainer">
        <div className="tagName">
          <span className="tagSpan">{tag.name}</span>
        </div>
        <div className="tagExplain">{tag.explain}</div>
        <div className="total">{`${tag.total} question`}</div>
      </div>
    </StyledDiv>
  );
}

export default TagItem;

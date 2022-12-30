import styled from "styled-components";

const StyledDiv = styled.div`
  grid-template-columns: repeat(4, minmax(0, 1fr));
  border: 0.5px solid #d6d9dc;
  display: inline-block;
  font-size: 12px;
  border-radius: 3px;

  .tagWrapper {
    width: 245px;
    height: 177px;
    padding: 12px;
  }

  .nameContainer {
    display: flex;
    justify-content: space-between;
    margin: 0px 0px 0px 0px;

    .name {
      background-color: #e1ecf4;
      color: #39739d;
      border-radius: 2px;
      padding: 5px 6px;
    }
  }

  .explainContainer {
    margin: 12px 0px 12px 0px;
    max-height: 70px;
  }

  .explain {
    color: #3b4045;
    font-size: 12.5px;
  }

  .total {
    width: 80px;
    color: #838c95;
  }
`;

function TagItem({ tag, search }) {
  return tag.name.includes(search) ? (
    <StyledDiv>
      <div className="tagWrapper">
        <div className="nameContainer">
          <span className="name">{tag.name}</span>
        </div>
        <div className="explainContainer">
          <div className="explain">{`${tag.explain.substr(0, 130)} ...`}</div>
        </div>
        <div className="total">{`${tag.total}\nquestion`}</div>
      </div>
    </StyledDiv>
  ) : null;
}

export default TagItem;

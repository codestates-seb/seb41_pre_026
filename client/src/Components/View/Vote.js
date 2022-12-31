import styled from "styled-components";

const VoteContainer = styled.div`
  width: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    background-color: #ffffff;
    border: 0px;
    display: block;
    margin: 2px;
  }

  div {
    color: #6a737c;
    font-size: 21px;
    text-align: center;
  }

  .arrow-up {
    aria-hidden: true;
    width: 36px;
    height: 36px;
    viewbox: 0 0 36 36;
    path {
      cursor: pointer;
      color: #babfc4;
      fill: #babfc4;
      d: path("M 2 25 h 34 L 18 9 2 25 Z");
    }
  }
  .arrow-down {
    aria-hidden: true;
    width: 36px;
    height: 36px;
    viewbox: 0 0 36 36;
    path {
      cursor: pointer;
      color: #babfc4;
      fill: #babfc4;
      d: path("M 2 11 h 32 L 18 27 2 11 Z");
    }
  }
`;

function Vote({ score }) {
  return (
    <VoteContainer>
      <button>
        <svg className="arrow-up">
          <path />
        </svg>
      </button>
      <div>
        <span>{score}</span>
      </div>
      <button>
        <svg className="arrow-down">
          <path />
        </svg>
      </button>
    </VoteContainer>
  );
}
export default Vote;

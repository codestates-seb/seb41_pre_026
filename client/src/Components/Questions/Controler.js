import styled from "styled-components";

const StyledControler = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px 0px 100px 0px;
  .disabled {
    display: none;
  }
  .cur {
    background-color: #f48225;
    color: white;
    border: 1px solid #f48225;
    pointer-events: none;
  }

  div {
    display: flex;
    gap: 5px;
  }

  .pageBtn {
    margin: 0px 0px 0px 25px;
  }

  .pageBtn span {
    font-size: 10px;
    letter-spacing: 1px;
    padding: 6px 0px 0px 0px;
    margin: 0px 7px 0px 7px;
  }

  .sizeBtn {
    margin: 0px 25px 0px 0px;
  }
`;

const StyledButton = styled.button`
  padding: 2px 8px 3px 8px;
  height: 28px;
  border: 1px solid #d6d9dc;
  border-radius: 3px;
  background-color: white;
  cursor: pointer;

  :hover {
    border: 1px solid #babfc4;
    background-color: #d6d9dc;
  }
`;
function Controler({ curPage, totalPage, handleCurPage, handleSize, size }) {
  let startPage = curPage - 2 > 0 ? curPage - 2 : 1;
  let endPage = startPage + 4 > totalPage ? totalPage : startPage + 4;
  const render = () => {
    let btns = [];
    if (endPage <= 5) {
      startPage = 1;
    }

    if (curPage >= endPage - 2) {
      startPage = endPage - 4;
    }

    for (let i = startPage; i <= endPage; i++) {
      btns.push(i);
    }

    if (startPage !== 1) {
      btns.unshift("...");
      btns.unshift(1);
    }
    if (endPage !== totalPage) {
      btns.push("...");
      btns.push(totalPage);
    }

    return btns;
  };
  return (
    <StyledControler>
      <div className="pageBtn">
        <StyledButton
          className={curPage - 1 > 0 ? "" : "disabled"}
          onClick={() => handleCurPage(curPage - 1)}
        >
          Prev
        </StyledButton>
        {render().map((el) => {
          if (typeof el !== "string") {
            return (
              <StyledButton
                className={curPage === el ? "cur" : null}
                key={el}
                onClick={(e) => handleCurPage(e.target.textContent)}
              >
                {el}
              </StyledButton>
            );
          } else return <span>{el}</span>;
        })}
        <StyledButton
          className={curPage + 1 <= totalPage ? "" : "disabled"}
          onClick={() => handleCurPage(curPage + 1)}
        >
          Next
        </StyledButton>
      </div>
      <div className="sizeBtn">
        <StyledButton
          className={size === 15 ? "cur" : null}
          onClick={(e) => handleSize(Number(e.target.textContent))}
        >
          15
        </StyledButton>
        <StyledButton
          className={size === 30 ? "cur" : null}
          onClick={(e) => handleSize(Number(e.target.textContent))}
        >
          30
        </StyledButton>
        <span>per Page</span>
      </div>
    </StyledControler>
  );
}

export default Controler;

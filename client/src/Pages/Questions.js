import Header from "../Components/Questions/Header";
import Question from "../Components/Questions/Question";
import styled from "styled-components";
import useRequest from "../Components/Share/useRequest";
import Controler from "../Components/Questions/Controler";
import { useState } from "react";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  width: 808px;
`;

const QuestionListContainer = styled.div`
  width: 100%
  background-color: #ffffff;
  border-radius: 0;
  margin : 0px 0px 70px 0px;
}
`;

function Questions({ setOnSide }) {
  const [curPage, setCurPage] = useState(1);
  const [size, setSize] = useState(15);
  const questions = useRequest(
    `/questions?page=${curPage}&size=${size}`,
    "get"
  );

  const handleCurPage = (page) => setCurPage(page);
  const handleSize = (size) => setSize(size);

  return (
    <StyledMain>
      <Header />
      <QuestionListContainer>
        {questions.data
          ? questions.data.map((question, idx) => {
              return <Question key={idx} question={question} />;
            })
          : null}
      </QuestionListContainer>
      {questions.pageInfo ? (
        <Controler
          curPage={Number(curPage)}
          handleCurPage={handleCurPage}
          handleSize={handleSize}
          size={size}
          totalPage={Number(10)}
        />
      ) : null}
    </StyledMain>
  );
}

export default Questions;

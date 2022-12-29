import { useEffect, useState } from "react";
import Header from "../Components/Questions/Header";
import Question from "../Components/Questions/Question";
import styled from "styled-components";
import { data } from "../Assets/questionsData";

const QuestionListContainer = styled.div`
  width: 100%
  background-color: #ffffff;
  border-radius: 0;
}
`;

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  width: 808px;
`;

function Questions({ setOnSide }) {
  const [questions, setQuestions] = useState(null);

  useEffect(() => {
    setQuestions(data);
    setOnSide(true);
  }, [setOnSide]);

  return (
    <StyledMain>
      <Header />
      <QuestionListContainer>
        {questions
          ? questions.map((question, idx) => (
              <Question key={idx} question={question} />
            ))
          : null}
      </QuestionListContainer>
    </StyledMain>
  );
}

export default Questions;

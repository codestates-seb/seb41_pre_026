import { useEffect, useState } from "react";
import Header from "../Components/Questions/Header";
import Question from "../Components/Questions/Question";
import styled from "styled-components";
import { data } from "../Assets/questionsData";

const QuestionListContainer = styled.div`
  width: 780px;
  background-color: #ffffff;
  border-radius: 0;
}
`;

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
`;

function Questions() {
  const [questions, setQuestions] = useState(null);

  useEffect(() => {
    setQuestions(data);
  }, []);
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

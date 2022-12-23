import { useEffect, useState } from "react";
import Header from "../Components/Questions/Header";
import Question from "../Components/Questions/Question";
import styled from "styled-components";
import { data } from "../Assets/questionsData";

const QuestionListContainer = styled.div`
  width: calc(100% - 164px);
  bacground-color: #ffffff;
  border-radius: 0;
  border: 1px solid #d6d9dc;
  border-top-width: 0;
  border-bottom-width: 0;
  border-left-width: 1px;
  border-right-width: 0;
  padding: 24px;
  box-sizing: border-box;
}
`;

function Questions() {
  const [questions, setQuestions] = useState(null);

  useEffect(() => {
    setQuestions(data);
  }, []);
  return (
    <>
      <Header />
      <QuestionListContainer>
        {questions
          ? questions.map((question, idx) => (
              <Question key={idx} question={question} />
            ))
          : null}
      </QuestionListContainer>
    </>
  );
}

export default Questions;

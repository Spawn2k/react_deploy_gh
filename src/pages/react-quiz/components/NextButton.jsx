import React from 'react';
import { useQuiz } from '../context/QuizContext';

const NextButton = (props) => {
  // const {} = props;
  const { index, questions, dispatch } = useQuiz();

  return (
    <button onClick={() => dispatch({ type: 'quiz/next' })} className="btn btn-ui">
      {index < questions?.length - 1 ? 'Next' : 'Result'}
    </button>
  );
};

export default NextButton;

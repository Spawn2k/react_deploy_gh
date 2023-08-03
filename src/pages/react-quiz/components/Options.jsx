import React from 'react';
import { useQuiz } from '../context/QuizContext';

const Options = (props) => {
  // const {} = props;

  const { questions, index, dispatch, hasAnswerd } = useQuiz();

  return (
    <div className="options">
      {questions[index].options.map((option, idx) => (
        <button
          onClick={() => dispatch({ type: 'quiz/answer', payload: idx })}
          className={`btn btn-option ${hasAnswerd ? (questions[index].correctOption === idx ? 'answer' : '') : ''} ${
            hasAnswerd ? (questions[index].correctOption === idx ? 'correct' : 'wrong') : ''
          }`}
          key={option}
          disabled={hasAnswerd}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Options;

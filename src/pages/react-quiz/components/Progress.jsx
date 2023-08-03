import React from 'react';
import { useQuiz } from '../context/QuizContext';

const Progress = (props) => {
  // const {} = props;
  const { questions, points, index, hasAnswerd, maxPoints } = useQuiz();

  return (
    <header className="progress">
      <progress max={questions.length} value={hasAnswerd ? index + 1 : index} />
      <p>
        Question {index + 1}/{questions.length}
        <strong></strong>
      </p>
      <p>
        <strong>
          {points}/{maxPoints}
        </strong>
      </p>
    </header>
  );
};

export default Progress;

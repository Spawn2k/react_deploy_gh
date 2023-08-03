import React, { useEffect } from 'react';
import { useQuiz } from '../context/QuizContext';

const Timer = (props) => {
  // const {} = props;
  const { dispatch, timer } = useQuiz();
  const min = Math.floor(timer / 60);
  const sec = timer % 60;

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: 'quiz/timer' });
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, [dispatch]);

  return (
    <div className="timer">
      {min < 10 && '0'}
      {min}: {sec < 10 && '0'}
      {sec}
    </div>
  );
};

export default Timer;

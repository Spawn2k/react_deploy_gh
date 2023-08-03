import React from 'react';
import { useQuiz } from '../context/QuizContext';

const FinishScreen = (props) => {
  // const {} = props;
  const { points, newHighScore, maxPoints, highscore, dispatch } = useQuiz();
  const percentage = (points / maxPoints) * 100;
  let emoji;
  if (percentage === 100) emoji = '🏅';
  if (percentage >= 80 && percentage < 100) emoji = '🎉';
  if (percentage >= 50 && percentage < 80) emoji = '🙂';
  if (percentage >= 0 && percentage < 50) emoji = '🤔';
  if (percentage === 0) emoji = '🤦';

  return (
    <>
      <p className="result">
        {emoji}
        You Scored{' '}
        <strong>
          {points} out of {maxPoints} ({Math.ceil(percentage)}%)
        </strong>
      </p>
      {!newHighScore && <p className="highscore">Highscore: {highscore}</p>}
      {newHighScore && <p className="highscore">Congratulation new Highscore: {highscore}</p>}

      <button onClick={() => dispatch({ type: 'quiz/restart' })} className="btn btn-ui">
        Restart
      </button>
    </>
  );
};

export default FinishScreen;

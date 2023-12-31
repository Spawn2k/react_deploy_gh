import { useQuiz } from '../context/QuizContext';

const StartScreen = (props) => {
  // const {} = props;

  const { questions, quizStart } = useQuiz();

  return (
    <div className="start">
      <h2>Welcome to the React Quiz!</h2>
      <h3>{questions.length} question to test your React mastery</h3>
      <button className="btn btn-ui" onClick={quizStart}>
        let&apos;s start
      </button>
    </div>
  );
};

export default StartScreen;

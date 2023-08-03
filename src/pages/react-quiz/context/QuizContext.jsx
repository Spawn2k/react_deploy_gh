/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from 'react';

const QuizContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'quiz/loading':
      return {
        ...state,
        isLoading: action.payload,
      };
    case 'quiz/start':
      return {
        ...state,
        status: 'active',
        timer: state.secPerQuestion * state.questions.length,
      };
    case 'quiz/fetchQuestions':
      return {
        ...state,
        questions: action.payload,
        timer: state.questions.length * state.secPerQuestion,
      };
    case 'quiz/next':
      if (state.index >= state.questions.length - 1) {
        return {
          ...state,
          index: 0,
          status: 'finished',
          newHighScore: state.highscore < state.points,
          highscore: state.highscore < state.points ? state.points : state.highscore,
        };
      }
      return {
        ...state,
        hasAnswerd: false,
        index: state.index + 1,
      };
    case 'quiz/answer':
      return {
        ...state,
        points:
          state.points +
          (state.questions[state.index].correctOption === action.payload ? state.questions[state.index].points : 0),
        hasAnswerd: true,
      };
    case 'quiz/restart':
      return {
        ...state,
        status: 'active',
        index: 0,
        hasAnswerd: false,
        points: 0,
        timer: state.secPerQuestion * state.questions.length,
      };
    case 'quiz/timer':
      return {
        ...state,
        timer: state.timer - 1,
        status: state.timer === 0 ? 'finished' : state.status,
      };

    case 'quiz/dataReceived':
      return {
        ...state,
        questions: action.payload,
      };

    default:
      return state;
  }
};

const initialState = {
  questions: [],
  isLoading: false,
  status: 'start',
  index: 0,
  hasAnswerd: false,
  points: 0,
  highscore: 0,
  secPerQuestion: 30,
  timer: 0,
  newHighScore: false,
};

const QuizProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { children } = props;
  const { isLoading, index, status, questions, hasAnswerd, points, highscore, timer, newHighScore } = state;

  const quizStart = () => {
    dispatch({ type: 'quiz/start' });
  };

  const maxPoints = questions?.reduce((curr, acc) => {
    return curr + acc.points;
  }, 0);

  return (
    <QuizContext.Provider
      value={{
        isLoading,
        index,
        status,
        questions,
        hasAnswerd,
        quizStart,
        dispatch,
        points,
        maxPoints,
        highscore,
        timer,
        newHighScore,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

const useQuiz = () => {
  const context = useContext(QuizContext);
  if (context === undefined) throw new Error('Cities context was used outside the CititiesProvider ');
  return context;
};

export { QuizProvider, useQuiz };

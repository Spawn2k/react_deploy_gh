import { useQuiz } from './context/QuizContext';

import { useEffect } from 'react';
import Header from './components/Header';
import Main from './components/Main';
// import Loader from './components/Loader';
import StartScreen from './components/StartScreen';
import Progress from './components/Progress';
import Question from './components/Question';
import Footer from './components/Footer';
import Timer from './components/Timer';
import NextButton from './components/NextButton';
import FinishScreen from './components/FinishScreen';
import HomeBtn from '../home-page/components/HomeBtn';
import LoadingSpinner from '../../components/LoadingSpinner';
import Loader from '../../components/Loader';

function App() {
  const { status, isLoading, hasAnswerd, dispatch } = useQuiz();

  useEffect(() => {
    // const fetchQuestions = async () => {
    //   dispatch({ type: 'quiz/loading', payload: true });
    //   const res = await fetch('http://localhost:8000/questions');
    //   const data = await res.json();
    //   return data;
    // };
    const fetchQuestions = async () => {
      dispatch({ type: 'quiz/loading', payload: true });
      const res = await fetch(`https://api.jsonbin.io/v3/b/64c62de99d312622a388e0a2`, {
        method: 'GET',
        headers: {
          'X-Access-Key': '$2b$10$53dJYUtz7.L8hjsX40FLF.fLiWLH8z4rALoRXCCdj4k90rW9h5v8q',
        },
      });
      const data = await res.json();
      return data.record.questions;
    };

    fetchQuestions()
      .then((data) => {
        dispatch({ type: 'quiz/fetchQuestions', payload: data });
      })
      .catch((e) => dispatch({ type: 'quiz/error', payload: e }))
      .finally(() => dispatch({ type: 'quiz/loading', payload: false }));

    return () => {};
  }, [dispatch]);

  return (
    <div className="m-react-quiz app">
      <Header />

      <Main>
        {status === 'start' && !isLoading && <StartScreen />}
        {isLoading && <Loader borderColor="#1098ad" />}

        {status === 'active' && !isLoading && (
          <>
            <Progress /> <Question />
            <Footer>
              <Timer />
              {hasAnswerd && <NextButton />}
            </Footer>
          </>
        )}

        {status === 'finished' && <FinishScreen />}
      </Main>
      <HomeBtn color={'#1098ad'} />
    </div>
  );
}

export default App;

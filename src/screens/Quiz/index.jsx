import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Footer from '../../components/Footer';
import Loading from '../../components/Loading';
import QuizLogo from '../../components/QuizLogo';
import QuizContainer from '../../components/QuizContainer';
import QuizBackground from '../../components/QuizBackground';
import GitHubCorner from '../../components/GitHubCorner';
import Question from '../../components/Question';
import Result from '../../components/Result';
import FormContext from '../../contexts/FormContext';

const QuizPage = ({ questions }) => {
  const router = useRouter();
  const { resetScore, resetQuiz } = useContext(FormContext);
  const [screenState, handleScreenState] = useState('loading');
  const [questionIndex, handleQuestionIndex] = useState(0);
  const [choice, handleChoice] = useState(undefined);
  const totalQuestions = questions.length;
  const question = questions[questionIndex];

  useEffect(() => {
    if (screenState === 'loading') setTimeout(() => handleScreenState('quiz'), [2000]);
  }, [screenState]);

  const moveQuiz = () => {
    if (questionIndex + 1 < totalQuestions) {
      handleChoice(undefined);
      handleQuestionIndex(questionIndex + 1);
    } else {
      handleScreenState('result');
    }
  };

  const returnToStart = () => {
    resetScore();
    handleChoice(undefined);
    handleQuestionIndex(0);
    handleScreenState('loading');
  };

  const returnToZero = () => {
    router.push('/');
    resetQuiz();
  };

  return (
    <QuizBackground>
      <QuizLogo />

      {screenState === 'loading' && <Loading />}

      {screenState === 'quiz' && (
        <QuizContainer
          as={motion.section}
          transition={{ duration: 0.5 }}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="show"
        >
          <Question
            questions={totalQuestions}
            question={questionIndex}
            moveQuiz={moveQuiz}
            title={question.title}
            description={question.description}
            image={question.image}
            choice={choice}
            handleChoice={handleChoice}
            alternatives={question.alternatives}
            answer={question.answer}
          />
          <Footer />
        </QuizContainer>
      )}

      {screenState === 'result' && (
        <QuizContainer>
          <Result
            returnToStart={returnToStart}
            resetQuiz={returnToZero}
          />
          <Footer />
        </QuizContainer>
      )}

      <GitHubCorner projectUrl="https://github.com/FihCapua/BatuqueQuiz" />
    </QuizBackground>
  );
};

QuizPage.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default QuizPage;

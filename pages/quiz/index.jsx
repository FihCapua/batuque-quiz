import React from 'react';
import PropTypes from 'prop-types';
import QuizScreen from '../../src/screens/Quiz';
import db from '../../db_local.json';

const QuizPage = ({ questions }) => (
  <QuizScreen questions={questions} />
);

QuizPage.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export async function getStaticProps() {
  const questions = await db;

  return { props: { questions: questions.questions } };
}

export default QuizPage;

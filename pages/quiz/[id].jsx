import React from 'react';
import PropTypes from 'prop-types';
import QuizScreen from '../../src/screens/Quiz';

const QuizExternalPage = ({ questions }) => (
  <QuizScreen questions={questions} />
);

QuizExternalPage.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export async function getServerSideProps(context) {
  const [projectName, gitHubUser] = context.query.id.split('___');

  try {
    const ext = await fetch(`https://${projectName}.${gitHubUser}.vercel.app/api/db`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('Falha em pegar os dados');
      })
      .then((res) => res);
    return {
      props: { questions: ext.questions },
    };
  } catch (err) {
    throw new Error(err);
  }
}
export default QuizExternalPage;

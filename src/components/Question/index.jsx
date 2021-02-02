import React, { useState, useContext } from 'react';
import Lottie from 'react-lottie';
import PropTypes from 'prop-types';
import Button from '../Button';
import Widget from '../Widget';
import QuestionAlternative from '../QuestionAlternative';
import FormContext from '../../contexts/FormContext';
import checkAnimation from '../../animations/check.json';
import errorAnimation from '../../animations/error.json';

const Question = ({
  questions,
  question,
  title,
  description,
  image,
  image2x,
  alternatives,
  moveQuiz,
  answer,
}) => {
  const { score, incrementScore } = useContext(FormContext);
  const [choice, handleChoice] = useState(9);
  const [reveal, toggleReveal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    toggleReveal(true);
    if (parseInt(choice, 10) === answer) incrementScore();

    setTimeout(() => {
      handleChoice(9);
      toggleReveal(false);
      moveQuiz();
    }, 2000);
  };

  return (
    <Widget>
      <Widget.Header>{title}</Widget.Header>

      <Widget.Content as="form" onSubmit={handleSubmit}>

        <Widget.Image>
          {reveal && (
            <div className="animation">
              <Lottie
                options={{
                  loop: false,
                  autoplay: true,
                  animationData:
                    (parseInt(choice, 10) === answer ? checkAnimation : errorAnimation),
                  rendererSettings: {
                    preserveAspectRatio: 'xMidYMid meet',
                  },
                }}
              />
            </div>
          )}

          <img
            srcSet={image2x ? `${image}, ${image2x} 2x` : image}
            src={image}
            alt={title}
          />
        </Widget.Image>
        <Widget.Progress>
          {`${question + 1} / ${questions}`}
          {' '}
          —
          {' '}
          <strong>{score === 1 ? '1 ponto' : `${score} pontos`}</strong>
        </Widget.Progress>

        <Widget.Description>{description}</Widget.Description>

        <Widget.Alternatives>
          {alternatives.map((a, i) => (
            <li key={a}>
              <QuestionAlternative
                id={i}
                label={a}
                choice={choice}
                handleChoice={handleChoice}
                answer={answer}
                reveal={reveal}
              />
            </li>
          ))}
        </Widget.Alternatives>

        <Button type="submit" disabled={choice === 9 || reveal}>{reveal ? 'Carregando' : 'Confirmar'}</Button>
      </Widget.Content>
    </Widget>
  );
};

Question.propTypes = {
  questions: PropTypes.number.isRequired,
  question: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  image2x: PropTypes.string.isRequired,
  alternatives: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  moveQuiz: PropTypes.func.isRequired,
  answer: PropTypes.number.isRequired,
};

export default Question;

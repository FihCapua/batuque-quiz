import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Alternative = styled.label`
  display: block;
  border-radius: 0;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({
    active,
    theme,
    reveal,
    check,
  }) => {
    let result = null;
    if (active) {
      if (reveal) {
        result = check ? theme.colors.success : theme.colors.wrong;
      } else {
        result = theme.colors.secondary;
      }
    } else {
      result = (reveal && check) ? theme.colors.success : theme.colors.altBg;
    }

    return result;
  }};
  color: ${({
    active,
    theme,
    reveal,
    check,
  }) => {
    let result = null;
    if (active) {
      result = theme.colors.altBg;
    } else {
      result = (reveal && check) ? theme.colors.altBg : theme.colors.text;
    }

    return result;
  }};
  width: 100%;
  font-family: "Work Sans";
  font-size: 0.9rem;
  box-shadow: 0 0 0 rgba(0,0,0,0.2);
  transform: translate(0, 0);
  transition: all 0.25s ease-in-out;
  position: relative;
  cursor: pointer;

  &:hover {
    background: ${({ active, theme }) => (active ? theme.colors.secondary : theme.colors.dimmed)};
    transform: translate(-5px, -5px);
    box-shadow: 10px 10px 0 rgba(0,0,0,0.2);
  }

  &:active {
    background: ${({ active, theme }) => (active ? theme.colors.secondary : theme.colors.dimmed)};
    transform: translate(-2px, -2px);
    box-shadow: 4px 4px 0 rgba(0,0,0,0.2);
  }

  input[type="radio"] {
    visibility: hidden;
    width: 0;
    height: 0;
    margin: 0;
    padding: 0;
    position: absolute;
  }
`;

const QuestionAlternative = ({
  id,
  label,
  answer,
  reveal,
  choice,
  handleChoice,
}) => (
  <Alternative
    htmlFor={`question__${id}`}
    active={choice === id}
    reveal={reveal}
    check={answer === id}
  >
    <input
      id={`question__${id}`}
      name={id}
      type="radio"
      value={id}
      checked={choice === id}
      onChange={() => handleChoice(id)}
      disabled={reveal}
    />
    <span>{label}</span>
  </Alternative>
);

QuestionAlternative.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  choice: PropTypes.number.isRequired,
  answer: PropTypes.number.isRequired,
  reveal: PropTypes.bool.isRequired,
  handleChoice: PropTypes.func.isRequired,
};

export default QuestionAlternative;

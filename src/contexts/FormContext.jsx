import React, { createContext, useReducer } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FormReducer from '../reducers/FormReducer';

const initialValue = {
  name: '',
  score: 0,
};

const FormContext = createContext();

const FormProvider = ({ children }) => {
  const { query, path } = useRouter();
  const [state, dispatch] = useReducer(FormReducer, initialValue, () => (
    { name: query.name || (path === '/quiz' ? 'Jogador' : ''), score: 0 }
  ));

  const handleName = (name) => dispatch({ type: 'CHANGE_NAME', name });

  const resetScore = () => dispatch({ type: 'RESET_SCORE' });
  const incrementScore = () => dispatch({ type: 'INCREMENT_SCORE' });

  const resetQuiz = () => dispatch({ type: 'RESET_QUIZ', info: initialValue });

  const { name, score } = state;

  return (
    <FormContext.Provider value={{
      name,
      score,
      handleName,
      resetScore,
      incrementScore,
      resetQuiz,
    }}
    >
      {children}
    </FormContext.Provider>
  );
};

FormProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FormContext;

export {
  FormProvider,
};

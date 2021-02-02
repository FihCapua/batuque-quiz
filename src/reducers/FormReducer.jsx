const FormReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return { ...state, name: action.name };
    case 'RESET_QUIZ':
      return { ...action.info };
    case 'RESET_SCORE':
      return { ...state, score: 0 };
    case 'INCREMENT_SCORE':
      return { ...state, score: state.score + 1 };
    default:
      return state;
  }
};

export default FormReducer;

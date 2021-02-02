import styled from 'styled-components';

const QuizContainer = styled.div`
  width: 100%;
  max-width: 500px;
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-top: none;
  background: ${({ theme }) => theme.colors.contBg} url('./backAlt.svg') repeat center center;

  @media screen and (max-width: 499px) {
    margin: auto;
    max-width: none;
    padding: 0
  }
`;

export default QuizContainer;

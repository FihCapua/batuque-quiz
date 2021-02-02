import styled from 'styled-components';

const QuizBackground = styled.div`
  background: ${({ theme }) => theme.colors.mainBg} url('https://wallpaperaccess.com/full/531967.jpg');   
    width: 100%;
    background-size: cover;
    background-position: center center
`;

export default QuizBackground;
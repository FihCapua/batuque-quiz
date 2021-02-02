import styled from 'styled-components';

const Button = styled.button`
  display: block;
  border-radius: 0;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.altBg};
  width: 100%;
  font-family: "Work Sans";
  font-size: 1rem;
  box-shadow: 0 0 0 rgba(0,0,0,0.2);
  transform: translate(0, 0);
  transition: all 0.25s ease-in-out;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
    transform: translate(-5px, -5px);
    box-shadow: 10px 10px 0 rgba(0,0,0,0.2);
  }

  &:active {
    background: ${({ theme }) => theme.colors.mainBg};
    transform: translate(-2px, -2px);
    box-shadow: 4px 4px 0 rgba(0,0,0,0.2);
  }

  &:disabled {
    opacity: 0.6;
  }
`;

export default Button;

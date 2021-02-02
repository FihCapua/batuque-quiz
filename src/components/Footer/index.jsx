import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #00000070;
  padding: 20px;
  display: flex;
  align-items: center;
  margin-top: auto;
  color: ${({ theme }) => theme.colors.altBg};
  font-size: 0.9rem;

  img {
    width: 58px;
    margin-right: 23px;
  }

  a {
    color: ${({ theme }) => theme.colors.altBg};
    text-decoration: none;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
    span {
      text-decoration: underline;
    }
  }
`;

const Footer = () => (
  <FooterWrapper>
    <a href="https://www.alura.com.br/"><img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" /></a>
    <p>
      Orgulhosamente criado durante a
      {' '}
      <a href="https://www.alura.com.br/"><span>Imersão React da Alura</span></a>
    </p>
  </FooterWrapper>
);

export default Footer;

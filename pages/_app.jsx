/* eslint-disable react/prop-types */
import React from 'react';
import Head from 'next/head';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import db from '../db.json';
import { FormProvider } from '../src/contexts/FormContext';
import '../src/fonts/fonts.css';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Work Sans', sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.text};
  }

  html, body {
    min-height: 100vh;
  }

  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

const App = ({ Component, pageProps }) => (
  <ThemeProvider theme={db.theme}>
    <Head>
      <title>BatuqueQuiz</title>
      <meta name="title" content="BatuqueQuiz" />
      <meta name="description" content="Esse é um quiz sobre carnaval de escolas de samba feito na Imersão React da Alura." />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://batuquequiz.fihcapua.vercel.app/" />
      <meta property="og:title" content="BatuqueQuiz" />
      <meta property="og:description" content="Esse é um quiz sobre carnaval de escolas de samba feito na Imersão React da Alura." />
      <meta property="og:image" content="https://batuquequiz.fihcapua.vercel.app/card.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://batuquequiz.fihcapua.vercel.app/" />
      <meta property="twitter:title" content="BatuqueQuiz" />
      <meta property="twitter:description" content="Esse é um quiz sobre carnaval de escolas de samba feito na Imersão React da Alura." />
      <meta property="twitter:image" content="https://batuquequiz.fihcapua.vercel.app/" />

      <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>

    <GlobalStyle />
    <FormProvider>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </FormProvider>
  </ThemeProvider>
);

export default App;

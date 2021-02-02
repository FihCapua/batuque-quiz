import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import Projects from '../src/components/Projects';
import QuizLogo from '../src/components/QuizLogo';
import QuizContainer from '../src/components/QuizContainer';
import QuizBackground from '../src/components/QuizBackground';
import GitHubCorner from '../src/components/GitHubCorner';
import FormContext from '../src/contexts/FormContext';
import db from '../db.json';

const Home = ({ projs }) => {
  const router = useRouter();
  const { name, handleName } = useContext(FormContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    router.push(`/quiz?name=${name}`);
  };

  return (
    <QuizBackground>
      <QuizLogo />

      <QuizContainer
        as={motion.section}
        transition={{ duration: 0.5 }}
        variants={{
          show: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
        initial="hidden"
        animate="show"
      >
        <Widget>
          <Widget.HeaderImage>
            {db.title}
          </Widget.HeaderImage>

          <Widget.Content>
            <p>{db.description}</p>

            <form onSubmit={handleSubmit}>
              <Input
                type="text"
                label="Digite seu nome"
                value={name}
                onChange={({ target }) => handleName(target.value)}
                placeholder="Seu nome aqui"
              />
              <Button type="submit" disabled={name === 0}>{`Bora lá ${name}!`}</Button>
            </form>

          </Widget.Content>
        </Widget>

        <Projects projs={projs} />
        <Footer />
      </QuizContainer>

      <GitHubCorner projectUrl="https://github.com/FihCapua" />
    </QuizBackground>
  );
};

Home.defaultProps = {
  projs: {},
};

Home.propTypes = {
  projs: PropTypes.objectOf(PropTypes.shape),
};

export async function getStaticProps() {
  const projsInitial = await fetch('https://api.github.com/search/repositories?q=topic:aluraquiz&sort=updated&per_page=5', {
    method: 'GET',
    headers: {
      Accept: 'application/vnd.github.v3+json',
    },
  });

  const projs = await projsInitial.json();

  return { props: { projs } };
}

export default Home;

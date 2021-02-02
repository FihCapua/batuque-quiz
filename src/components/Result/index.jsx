import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import Button from '../Button';
import Widget from '../Widget';
import FormContext from '../../contexts/FormContext';

const Result = ({
  returnToStart,
  resetQuiz,
}) => {
  const { name, score } = useContext(FormContext);
  const { pathname } = useRouter();

  const getTypeMessage = (r) => {
    let rate = 0;

    if (r > 6) {
      rate = 5;
    } else if (r > 5) {
      rate = 4;
    } else if (r > 4) {
      rate = 3;
    } else if (r > 3) {
      rate = 2;
    } else if (r > 2) {
      rate = 1;
    }

    switch (rate) {
      case 5: return 'Você sabe tudo sobre escolas de samba e o universo do carnaval! Parabéns sambista! =D';
      case 4: return 'Mandou bem!! mas ainda pode aprender mais e melhorar muito mais! ;)';
      case 3: return 'Você ainda pode aprender muito mais, mas está no caminho certo. :)';
      case 1: return 'Você sabe algumas coisas, mas ainda pode afinar e melhorar. :)';
      case 2: return 'Você sabe uma coisa ou outra, mas ainda tem um longo caminho no batuque a percorrer. :)';
      default: return 'Parece que você ainda não conhece muito sobre carnaval. Mas tudo bem, não se preocupe, tente novamente assim você pode aprender mais =)';
    }
  };

  return (
    <Widget>
      <Widget.Header>
        Pontuação final:
        {' '}
        {score}
      </Widget.Header>

      <Widget.Content>
        <p>
          {name || 'Jogador'}
          , você acertou
          {' '}
          {score === 1 ? 'uma questão' : `${score} questões`}
          .
          {' '}
          {pathname !== '/quiz/[id]' && getTypeMessage(score)}
        </p>

        <Widget.Links>
          <li>
            <Button type="button" onClick={returnToStart}>Tentar de novo</Button>
          </li>
          <li>
            <Button type="button" onClick={resetQuiz}>Voltar ao início</Button>
          </li>
        </Widget.Links>
      </Widget.Content>
    </Widget>
  );
};

Result.propTypes = {
  resetQuiz: PropTypes.func.isRequired,
  returnToStart: PropTypes.func.isRequired,
};

export default Result;

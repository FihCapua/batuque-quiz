import React from 'react';
import PropTypes from 'prop-types';
import Widget from '../Widget';
import Link from '../Link';
import Loading from '../Loading';

const Projects = ({ projs }) => (
  <Widget>
    <Widget.Content>
      <h2>Quizes da galera</h2>
      <p>Veja os quizes mais recentes para testar seus conhecimentos em outros assuntos:</p>

      {projs === {}
        ? <Loading />
        : (
          <Widget.Links>
            {(projs.items && projs.items.length > 0)
              ? (projs.items.map((p) => (
                <li key={p.id}>
                  <Link href={`/quiz/${p.name}___${p.owner.login}`}>
                    <strong>{p.owner.login}</strong>
                    {' – '}
                    {p.name}
                  </Link>
                </li>
              )))
              : <li>Projetos não encontrados</li>}
          </Widget.Links>
        )}
    </Widget.Content>
  </Widget>
);

Projects.propTypes = {
  projs: PropTypes.objectOf(PropTypes.shape).isRequired,
};

export default Projects;

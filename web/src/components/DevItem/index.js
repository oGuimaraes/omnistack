import React from 'react';

import './styles.css';

function DevItem({ dev }) {
    return (
        <li className="dev-item">
        <header>
          <img src={dev.avatar_url} alt="Otávio Guimarães"></img>
          <div className="user-info">
            <strong>{dev.name}</strong>
            <span>{dev.techs.join(', ')}</span>
          </div>
        </header>
        <p>{dev.bio}</p>
        <div className="user-option">
          <a href={`https://github.com/${dev.github_username}`}>Acessar Perfil no Github</a>
          <a>Excluir</a>
        </div>
      </li>
    );
}

export default DevItem;

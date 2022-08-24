import React from "react";
import './Header.css';

export default ({ black }) => {
  return (
    <header className={black ? 'black' : ''}>
      <div className="header-logo">
        <a href="/">
          <img src="" alt="Netflix Logo"/>
        </a>
      </div>
      <div className="header-user">
        <img src="" alt="Avatar Usuário"/>
      </div>
    </header>
  );
}
import React from "react";
import "./header.css";
import hackerNewsIcon from '../../icons/y18.gif'

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <img className="header-logo" src={hackerNewsIcon} alt="Hacker News icon" />
        <div className="header-title">
          <h1>Hacker News</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;

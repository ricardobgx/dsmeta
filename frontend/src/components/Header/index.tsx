import React from "react";
import logo from "../../assets/images/logo.svg";

const Header: React.FC = (): JSX.Element => {
  return (
    <header>
      <div className="dsmeta-logo-container">
        <img src={logo} alt="DSMeta" />
        <h1>DSMeta</h1>
        <p>
          Desenvolvido por
          <a href="https://www.instagram.com/ricardobgx"> @ricardobgx</a>
        </p>
      </div>
    </header>
  );
};

export default Header;

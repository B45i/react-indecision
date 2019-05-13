import React from 'react';

const Header = (props) => (
    <div className="header">
      <div className="container">
        <h1 className="header__title">{props.title}</h1>
      </div>
      <h2 className="header__subtitle">{props.subtitle}</h2>
    </div>
  );

Header.defaultProps = {
  title: "Indecision App",
  subtitle: "Options chooser"
};

export default Header;
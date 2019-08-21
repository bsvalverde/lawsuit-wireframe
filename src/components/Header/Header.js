import React from 'react';
import { withRouter } from 'react-router-dom';

import classes from './Header.module.scss';

import ClearButton from '../UI/ClearButton/ClearButton';
import Logo from '../Logo/Logo';

const Header = (props) => {
  const goBack = () => {
    props.history.push("/");
  };

  let button = <ClearButton onClick={goBack}>Voltar</ClearButton>;
  if (props.location.pathname === "/") {
    button = <ClearButton>Sair</ClearButton>;
  }
  return (
    <div className={classes.Header}>
      <Logo />
      { button }
    </div>
  );
};

export default withRouter(Header);

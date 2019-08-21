import React from 'react';
import classes from './Header.module.scss';

import ClearButton from '../UI/ClearButton/ClearButton';
import Logo from '../Logo/Logo';

const Header = () => {
  return (
    <div className={classes.Header}>
      <Logo />
      <ClearButton>Sair</ClearButton>
    </div>
  );
};

export default Header;

import React from 'react';
import { useTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';

import classes from './Header.module.scss';

import ClearButton from '../UI/ClearButton/ClearButton';
import Logo from '../Logo/Logo';

export const Header = (props) => {
  const { t } = useTranslation();

  const goBack = () => {
    props.history.push("/");
  };

  let button = <ClearButton onClick={goBack}>{t('goBack')}</ClearButton>;
  if (props.location.pathname === "/") {
    button = <ClearButton>{t('leave')}</ClearButton>;
  }
  return (
    <div className={classes.Header}>
      <Logo />
      { button }
    </div>
  );
};

export default withRouter(Header);

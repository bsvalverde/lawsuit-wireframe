import React from 'react';

import classes from './DarkButton.module.scss'

const DarkButton = (props) => {
  return (
    <button
      className={classes.DarkButton}
      type="button"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default DarkButton;

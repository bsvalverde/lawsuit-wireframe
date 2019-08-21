import React from 'react';

import classes from './GreyButton.module.scss'

const GreyButton = (props) => {
  return (
    <button
      className={classes.GreyButton}
      type="button"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default GreyButton;

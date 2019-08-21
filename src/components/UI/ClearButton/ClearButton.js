import React from 'react';

import classes from './ClearButton.module.scss';

const ClearButton = props => {
  return (
    <button
      className={classes.ClearButton}
      type="button"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default ClearButton;

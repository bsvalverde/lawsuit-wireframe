import React from 'react';

import classes from './ClearButton.module.scss';

const ClearButton = props => {
  return (
    <button type="button" className={classes.ClearButton}>
      {props.children}
    </button>
  );
};

export default ClearButton;

import React from 'react';

import classes from './UpDownArrowsButton.module.scss';

const UpDownArrowsButton = (props) => {
  let className = classes.Arrows;
  if (props.selected) {
    className = props.ascending ? classes.Down : classes.Up;
  }

  return (
    <div className={classes.Container}>
      <button
        className={className}
        onClick={props.onClick}
        type="button"
      ></button>
    </div>
  );
};

export default UpDownArrowsButton;

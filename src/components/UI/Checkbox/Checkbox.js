import React from 'react';

import classes from './Checkbox.module.scss';

const Checkbox = (props) => {
  return (
    <label className={classes.Checkbox}>
      <input
        type="checkbox"
        checked={props.checked}
        onChange={props.onChange}
      />
      <span></span>
    </label>
  );
};

export default Checkbox;

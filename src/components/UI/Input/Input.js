import React, { useState, useEffect } from 'react';

import classes from './Input.module.scss';

const Input = (props) => {
  const [inputValue, setInputValue] = useState('');

  const { onUserType } = props;
  useEffect(() => {
    const timer = setTimeout(() => onUserType(inputValue), 1000);
    return () => clearTimeout(timer);
  }, [inputValue, onUserType])

  return (
    <input
      className={classes.Input}
      type="text"
      placeholder={props.placeholder}
      value={inputValue}
      onChange={(event) => setInputValue(event.target.value)}
    />
  );
};

export default Input;

import React from 'react';

import classes from './HistoryModal.module.scss';

import Backdrop from '../../UI/Backdrop/Backdrop';

const HistoryModal = (props) => {
  const legalCase = props.case;

  let history = <p>Nada para mostrarto.</p>
  if (legalCase.historicals.length > 0) {
    history = legalCase.historicals.map((legalCase, index) => {
      return <p key={index}>histórico</p>;
    });
  }
console.log(legalCase);
  return (
    <Backdrop>
      <div className={classes.Modal}>
        <button
          className={classes.CloseButton}
          type="button"
          onClick={props.close}
        ></button>
      <div className={classes.Box}>
        {history}
      </div>
      </div>
    </Backdrop>
  );
};

export default HistoryModal;
import React from 'react';

import classes from './HistoryModal.module.scss';

import cloud from '../../../assets/icons/cloud.svg';

import Backdrop from '../../UI/Backdrop/Backdrop';

const HistoryModal = (props) => {
  const legalCase = props.case;

  let history = <p className={classes.Empty}>Nada para mostrar.</p>
  if (legalCase.historicals.length > 0) {
    history = (
      <table>
        <tbody>
          {
            legalCase.historicals.map((historical, index) => {
              const [date,] = historical.date.split('T');
              return (
                <tr key={index}>
                  <td><img src={cloud} alt="Cloud" /></td>
                  <td>{date.replace(/-/g, '/')}</td>
                  <td><p>{historical.description}</p></td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    );
  }

  return (
    <Backdrop>
      <div className={classes.Modal}>
        <button
          className={classes.CloseButton}
          type="button"
          onClick={props.close}
        ></button>
      <div className={classes.Box}>
        <p className={classes.Title}>Históricos</p>
        { history }
      </div>
      </div>
    </Backdrop>
  );
};

export default HistoryModal;
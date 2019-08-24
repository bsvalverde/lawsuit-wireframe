import i18n from 'i18next';
import React from 'react';
import { useTranslation } from 'react-i18next';

import classes from './HistoricsModal.module.scss';

import cloud from '../../../assets/icons/cloud.svg';

import Backdrop from '../../UI/Backdrop/Backdrop';

const HistoricsModal = (props) => {
  const { t } = useTranslation();

  const legalCase = props.case;

  let historics = <p className={classes.Empty}>{t('nothingToShow')}</p>
  if (legalCase.historicals.length > 0) {
    historics = (
      <table>
        <tbody>
          {
            legalCase.historicals.map((historical, index) => {
              const [date,] = historical.date.split('T');
              return (
                <tr key={index}>
                  <td><img src={cloud} alt="Cloud" /></td>
                  <td>{new Date(date).toLocaleDateString(i18n.language)}</td>
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
        <p className={classes.Title}>{t('historics')}</p>
        { historics }
      </div>
      </div>
    </Backdrop>
  );
};

export default HistoricsModal;
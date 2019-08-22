import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './CaseSummary.module.scss';

import folder from '../../../assets/icons/folder.svg';

import Checkbox from '../../UI/Checkbox/Checkbox';
import DarkButton from '../../UI/DarkButton/DarkButton';

const CaseSummary = (props) => {
  const legalCase = props.case;
  const typeClass = legalCase.type === 'CTE_CASE'
    ? null
    : classes.Lawsuit;

  return (
    <tr className={classes.CaseSummary}>
      <td><Checkbox /></td>
      <td><img className={typeClass} src={folder} alt={legalCase.type} /></td>
      <td><p>{legalCase.title}</p></td>
      <td><p>{legalCase.file || '-'}</p></td>
      <td>
        <p>
          {legalCase.lawsuitType}
          {legalCase.lawsuitType && legalCase.number && "/"}
          {legalCase.number}
        </p>
      </td>
      <td><p>{legalCase.court || '-'}</p></td>
      <td>
        <NavLink to={`/cases/${legalCase.id}`}>
          <DarkButton>Ver</DarkButton>
        </NavLink>
      </td>
    </tr>
  );
};

export default CaseSummary;
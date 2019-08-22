import React from 'react';
import { connect } from 'react-redux';

import classes from './CasePage.module.scss';

import ClearButton from '../../components/UI/ClearButton/ClearButton';

const CasePage = (props) => {
  const legalCase = props.cases.find(legalCase =>
    legalCase.id === props.match.params.id
  );

  return (
    <div className={classes.CasePage}>
      <div className={classes.Header}>
        <label className={classes.Title}>{legalCase.title}</label>
        <ClearButton>Visualizar históricos</ClearButton>
      </div>
      <div className={classes.Box}>
        <div className={classes.Item}>
          <label>Link no tribunal</label>
          <p>
            <a
              href="https://esaj.tjsc.jus.br"
              target="_blank"
              rel="noopener noreferrer"
            >E-SAJ</a>
            </p>
        </div>
        <div className={classes.Item}>
          <label>Ação</label>
          <p>{legalCase.lawsuitType}</p>
        </div>
        <div className={classes.Item}>
          <label>Juízo</label>
          <p>{legalCase.type}</p>
        </div>
        <div className={classes.Item}>
          <label>Lorem ipsum</label>
          <p>dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum.</p>
        </div>
        <div className={classes.Item}>
          <label>Lorem ipsum</label>
          <p>dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className={classes.Item}>
          <label>Lorem ipsum</label>
          <p>dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className={classes.Item}>
          <label>Lorem ipsum</label>
          <p>dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className={classes.Item}>
          <label>Lorem ipsum</label>
          <p>dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className={classes.Item}>
          <label>Lorem ipsum</label>
          <p>dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cases: state.cases.cases
  };
};

export default connect(mapStateToProps)(CasePage);

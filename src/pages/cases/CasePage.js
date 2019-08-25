import React, { Fragment, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import classes from './CasePage.module.scss';

import ClearButton from '../../components/UI/ClearButton/ClearButton';
import HistoricsModal from '../../components/Cases/HistoricsModal/HistoricsModal';

export const CasePage = (props) => {
  const [showHistorics, setShowHistorics] = useState(false);
  const { t } = useTranslation();

  const legalCase = props.cases.find(legalCase =>
    legalCase.id === props.match.params.id
  );

  const viewHistorics = () => {
    setShowHistorics(true);
  };

  const hideHistorics = () => {
    setShowHistorics(false);
  }

  const historics = showHistorics
    && <HistoricsModal case={legalCase} close={hideHistorics} />;

  return (
    <Fragment>
    <div className={classes.CasePage}>
      <div className={classes.Header}>
        <label className={classes.Title}>{legalCase.title}</label>
        { showHistorics || <ClearButton onClick={viewHistorics}>{t('viewHistorics')}</ClearButton> }
      </div>
      <div className={classes.Box}>
        <div className={classes.Item}>
          <label>{t('courtLink')}</label>
          <p>
            <a
              href="https://esaj.tjsc.jus.br"
              target="_blank"
              rel="noopener noreferrer"
            >E-SAJ</a>
            </p>
        </div>
        <div className={classes.Item}>
          <label>{t('action')}</label>
          <p>{legalCase.lawsuitType}</p>
        </div>
        <div className={classes.Item}>
          <label>{t('judgment')}</label>
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
    {historics}
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    cases: state.cases.cases
  };
};

export default connect(mapStateToProps)(CasePage);

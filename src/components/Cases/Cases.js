import React, { Fragment, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import classes from './Cases.module.scss';

import CaseSummary from './CaseSummary/CaseSummary';
import Checkbox from '../../components/UI/Checkbox/Checkbox';
import GreyButton from '../../components/UI/GreyButton/GreyButton';
import Spinner from '../../components/UI/Spinner/Spinner';
import UpDownArrowsButton from '../../components/UI/UpDownArrowsButton/UpDownArrowsButton';

export const Cases = (props) => {
  const [orderCasesBy, setOrderCasesBy] = useState({key: 'id', ascending: true, numeric: true});
  const [casesPerPage, setCasesPerPage] = useState(props.perPage);

  const { t } = useTranslation();

  const orderCasesByString = (caseA, caseB) => {
    if (caseA[orderCasesBy.key].toUpperCase() > caseB[orderCasesBy.key].toUpperCase()) {
      return orderCasesBy.ascending ? 1 : -1;
    }
    if (caseA[orderCasesBy.key].toUpperCase() < caseB[orderCasesBy.key].toUpperCase()) {
      return orderCasesBy.ascending ? -1 : 1;
    }
    return 0;
  };

  const orderCasesByNumeric = (caseA, caseB) => {
    const multiplier = orderCasesBy.ascending ? 1 : -1;
    return multiplier * (parseInt(caseA[orderCasesBy.key]) - parseInt(caseB[orderCasesBy.key]));
  };

  let cases = [...props.cases].sort(orderCasesBy.numeric
    ? orderCasesByNumeric
    : orderCasesByString
  );

  if (props.isLoading) {
    return <Spinner />;
  }

  if (props.error) {
    return <p className={classes.Message}>{t('loadingError')}</p>;
  }

  if (cases.length === 0) {
    return <p className={classes.Message}>{t('nothingToShow')}</p>
  }

  const loadMore = () => {
    setCasesPerPage(prevCasesPerPage => prevCasesPerPage + props.perPage);
  };

  const orderByField = (key) => {
    setOrderCasesBy(prevState => {
      return {
        key: key,
        ascending: prevState.key !== key || !prevState.ascending,
        numeric: key === 'id'
      };
    });
  };

  let shownCases = cases;
  let allCasesShown = true;
  if (casesPerPage < shownCases.length) {
    shownCases = shownCases.slice(0, casesPerPage);
    allCasesShown = false;
  }

  return (
    <Fragment>
      <table className={classes.CasesList}>
        <thead>
          <tr>
            <th><Checkbox /></th>
            <th>{t('type')}</th>
            <th>{t('title')}/{t('client')}
              <UpDownArrowsButton
                selected={orderCasesBy.key === 'title'}
                ascending={orderCasesBy.ascending}
                onClick={() => orderByField('title')}
              />
            </th>
            <th>{t('folder')}</th>
            <th>{t('action')}/{t('number')}</th>
            <th>{t('court')}</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          { shownCases.map(legalCase =>
              <CaseSummary
                key={legalCase.id}
                case={legalCase}
              />
            )
          }
        </tbody>
      </table>
      {
        allCasesShown
        || <GreyButton onClick={loadMore} >{t('loadMore')}</GreyButton>
      }
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    cases: state.cases.filteredCases,
    isLoading: state.cases.isLoading,
    error: state.cases.error
  };
};

export default connect(mapStateToProps)(Cases);

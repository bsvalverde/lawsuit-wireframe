import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';

import classes from './Cases.module.scss';

import CaseSummary from './CaseSummary/CaseSummary';
import Checkbox from '../../components/UI/Checkbox/Checkbox';
import GreyButton from '../../components/UI/GreyButton/GreyButton';
import Spinner from '../../components/UI/Spinner/Spinner';

const Cases = (props) => {
  const [casesPerPage, setCasesPerPage] = useState(props.perPage);

  if (props.isLoading) {
    return <Spinner />;
  }

  if (props.error) {
    return <p>{props.error.message}</p>;
  }

  if (props.cases.length === 0) {
    return <p>Nada</p>
  }

  const loadMore = () => {
    setCasesPerPage(prevCasesPerPage => prevCasesPerPage + props.perPage);
  };

  let shownCases = props.cases;
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
            <th>Tipo</th>
            <th>Título/Cliente</th>
            <th>Pasta</th>
            <th>Ação/Número</th>
            <th>Foro</th>
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
        || <GreyButton onClick={loadMore} >Carregar mais</GreyButton>
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

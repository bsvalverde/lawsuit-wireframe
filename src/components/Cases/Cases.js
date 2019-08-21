import React, { useState } from 'react';
import { connect } from 'react-redux';

import Spinner from '../../components/UI/Spinner/Spinner';

const Cases = (props) => {
  //const [casesPerPage, setCasesPerPage] = useState(props.perPage);

  if (props.isLoading) {
    return <Spinner />;
  }

  if (props.error) {
    return <p>{props.error.message}</p>;
  }

  return <p>cases loaded</p>;
};

const mapStateToProps = (state) => {
  return {
    cases: state.cases.cases,
    isLoading: state.cases.isLoading,
    error: state.cases.error
  };
};

export default connect(mapStateToProps)(Cases);

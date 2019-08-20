import React, { useEffect } from 'react';
import { connect } from 'react-redux';

//import './App.scss';

import * as actions from './store/actions';

const App = (props) => {
  const { onAppStart } = props;
  useEffect(() => {
    onAppStart();
  }, [onAppStart]);

  if (props.loading) {
    return <p>Spinner</p>
  }

  if (props.error) {
    return <p>{props.error.message}</p>
  }

  return (
    <div className="App">
      cases collected
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cases: state.cases.cases,
    isLoading: state.cases.isLoading,
    error: state.cases.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAppStart: () => dispatch(actions.loadCases())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

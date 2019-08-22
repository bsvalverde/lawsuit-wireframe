import React, { useEffect, Suspense } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

import * as actions from './store/actions';

import MainPage from './pages/MainPage';

import Layout from './containers/Layout/Layout';
import Spinner from './components/UI/Spinner/Spinner';

const CasePage = React.lazy(() => {
  return import('./pages/cases/CasePage');
});

const App = (props) => {
  const { onAppStart } = props;

  useEffect(() => {
    onAppStart();
  }, [onAppStart]);

  return (
    <Layout>
      <Suspense fallback={<Spinner />}>
        <Route path="/cases/:id" render={(props) => <CasePage {...props} />} />
        <Route path="/" exact component={MainPage} />
        <Redirect to="/" />
      </Suspense>
    </Layout>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAppStart: () => dispatch(actions.loadCases())
  };
};

export default connect(null, mapDispatchToProps)(App);

import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import './index.scss';

import App from './App';
import casesReducer from './store/reducers/cases';
import i18n from './i18n';

const rootReducer = combineReducers({
  cases: casesReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

const app = (
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </I18nextProvider>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

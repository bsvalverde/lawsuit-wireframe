import * as actionTypes from './actionTypes';

import api from '../../services/api';

const loadCasesStart = () => {
  return {
    type: actionTypes.LOAD_CASES_START
  };
};

const loadCasesSuccess = (cases) => {
  return {
    type: actionTypes.LOAD_CASES_SUCCESS,
    cases: cases
  };
};

const loadCasesFail = (error) => {
  return {
    type: actionTypes.LOAD_CASES_FAIL,
    error: error
  };
};

export const loadCases = () => {
  return dispatch => {
    dispatch(loadCasesStart());
    api.get()
      .then(response => {
        dispatch(loadCasesSuccess(response.data.cases));
      })
      .catch(error => {
        dispatch(loadCasesFail(error));
      });
  };
};

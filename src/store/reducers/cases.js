import * as actionTypes from '../actions/actionTypes';

const initialState = {
  cases: [],
  isLoading: false,
  error: null
};

const loadCasesStart = (state, action) => {
  return {
    ...state,
    isLoading: true,
    error: null
  };
};

const loadCasesSuccess = (state, action) => {
  return {
    ...state,
    isLoading: false,
    cases: action.cases
  };
};

const loadCasesFail = (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: action.error
  };
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.LOAD_CASES_START: return loadCasesStart(state, action);
    case actionTypes.LOAD_CASES_SUCCESS: return loadCasesSuccess(state, action);
    case actionTypes.LOAD_CASES_FAIL: return loadCasesFail(state, action);
    default: return state;
  }
};

export default reducer;

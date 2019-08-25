import * as actionTypes from '../actions/actionTypes';

import reducer from './cases';

describe('cases reducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      cases: [],
      filteredCases: [],
      isLoading: false,
      error: null
    };
  });


  it('should return the current state when no valid action is passed', () => {
    expect(reducer(initialState, {})).toEqual(initialState);
  });

  it('should set isLoading to true and error to null on LOAD_CASES_START', () => {
    const action = {
      type: actionTypes.LOAD_CASES_START
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: true,
      error: null
    });
  });

  it('should set isLoading to false and receive the cases and filteredCases from the action on LOAD_CASES_SUCCESS', () => {
    const cases = [1, 2, 3, 4, 5];
    const action = {
      type: actionTypes.LOAD_CASES_SUCCESS,
      cases: cases
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: false,
      cases: cases,
      filteredCases: cases
    });
  });

  it('should set isLoading to false and receive the error from the action on LOAD_CASES_FAIL', () => {
    const error = 'mock error';
    const action = {
      type: actionTypes.LOAD_CASES_FAIL,
      error: error
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: false,
      error: error
    });
  });

  it('should set filtearedCases to the cases which title contains the filter received from the action on FILTER_BY_TITLE', () => {
    const cases = [
      {
        title: 'first'
      },
      {
        title: 'second'
      },
      {
        title: 'third'
      }
    ];
    initialState.cases = cases;
    const action = {
      type: actionTypes.FILTER_BY_TITLE,
      title: 't'
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      filteredCases: [
        {
          title: 'first'
        },
        {
          title: 'third'
        }
      ]
    });
  });
});

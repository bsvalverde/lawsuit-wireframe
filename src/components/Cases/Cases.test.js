import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import { Cases } from './Cases';
import classes from './Cases.module.scss';

import GreyButton from '../UI/GreyButton/GreyButton';
import i18n from '../../i18n';
import Spinner from '../UI/Spinner/Spinner';

configure({adapter: new Adapter()});

describe('<Cases />', () => {
  let wrapper;
  let cases = [];

  beforeEach(() => {
    cases = [];
    for (var i = 1; i <= 7; i++) {
      cases.push({
        id: i,
        title: `Case #${i}`
      });
    }
    wrapper = shallow(<Cases cases={cases} perPage={10} />);
  });

  it('should render a <Spinner /> element if the cases are loading', () => {
    wrapper.setProps({ isLoading: true });
    expect(wrapper.exists(Spinner)).toBeTruthy();
  });

  it('should not render a <Spinner /> element if the cases are not loading', () => {
    wrapper.setProps({ isLoading: false });
    expect(wrapper.exists(Spinner)).toBeFalsy();
  });

  it('should render a message if there was an error loading', () => {
    wrapper.setProps({ error: true });
    expect(wrapper.contains(
      <p className={classes.Message}>{i18n.t('loadingError')}</p>
    )).toBeTruthy();
  });

  it('should render a message if there are no cases to show', () => {
    wrapper.setProps({ cases: [] });
    expect(wrapper.contains(
      <p className={classes.Message}>{i18n.t('nothingToShow')}</p>
    )).toBeTruthy();
  });

  it('should not render a message if there are cases to show', () => {
    expect(wrapper.exists(`p.${classes.Message}`)).toBeFalsy();
  });

  it('should render a <table /> element if there are cases to show', () => {
    expect(wrapper.exists('table')).toBeTruthy();
  });

  it('should render a <GreyButton /> element if there are more cases to show than the perPage prop', () => {
    wrapper = shallow(<Cases cases={cases} perPage={5} />);
    expect(wrapper.exists(GreyButton)).toBeTruthy();
  });

  it('should not render a <GreyButton /> element if there are less cases to show than the perPage prop', () => {
    expect(wrapper.exists(GreyButton)).toBeFalsy();
  });
});

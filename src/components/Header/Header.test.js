import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import { Header } from './Header';

import ClearButton from '../UI/ClearButton/ClearButton';
import i18n from '../../i18n';

configure({adapter: new Adapter()});

describe('<Header />', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<Header location={{ pathname: '/' }} />);
  });

  it('should render a <ClearButton /> element with leave text if the current path is /', () => {
    expect(wrapper.find(ClearButton).prop('children')).toBe(i18n.t('leave'));
  });

  it('should render a <ClearButton /> element with goBack text if the current path is not /', () => {
    wrapper.setProps({ location: { pathname: '/notRoot' }});
    expect(wrapper.find(ClearButton).prop('children')).toBe(i18n.t('goBack'));
  });
});

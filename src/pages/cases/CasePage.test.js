import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import { CasePage } from './CasePage';

import ClearButton from '../../components/UI/ClearButton/ClearButton';
import HistoricsModal from '../../components/Cases/HistoricsModal/HistoricsModal';
import i18n from '../../i18n';

configure({adapter: new Adapter()});

describe('<CasePage />', () => {
  let wrapper;
  let cases;
  let match;
  
  beforeEach(() => {
    cases = [{
      id: 1
    }];
    match = {
      params: {
        id: 1
      }
    };
    wrapper = shallow(<CasePage cases={cases} match={match} />);
  });

  it('should render a <ClearButton /> element with viewHistorics text on page render', () => {
    expect(wrapper.find(ClearButton).prop('children')).toBe(i18n.t('viewHistorics'));
  });

  it('should hide the <ClearButton /> element when it is clicked', () => {
    wrapper.find(ClearButton).simulate('click');
    expect(wrapper.exists(ClearButton)).toBeFalsy();
  });

  it('should not render <HistoricsModal /> element on page render', () => {
    expect(wrapper.exists(HistoricsModal)).toBeFalsy();
  });

  it('should render <HistoricsModal /> element when <ClearButton /> element is clicked', () => {
    wrapper.find(ClearButton).simulate('click');
    expect(wrapper.exists(HistoricsModal)).toBeTruthy();
  });
});

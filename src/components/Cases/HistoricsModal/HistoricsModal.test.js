import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import HistoricsModal from './HistoricsModal';
import classes from './HistoricsModal.module.scss';

import i18n from '../../../i18n';

configure({adapter: new Adapter()});

describe('<HistoricsModal />', () => {
  let wrapper;
  let legalCase;

  beforeEach(() => {
    legalCase = {
      historicals: [{
        date: '01-01-2019',
        description: '#1'
      }, {
        date: '01-02-2019',
        description: '#2'
      }, {
        date: '01-03-2019',
        description: '#3'
      },]
    };
    wrapper = shallow(<HistoricsModal case={legalCase} />);
  });

  it('should render a <table /> element if there are historics to show', () => {
    expect(wrapper.exists('table')).toBeTruthy();
  });

  it('should render as many <tr /> elements as there are historics', () => {
    expect(wrapper.find('tr')).toHaveLength(3);
    wrapper.setProps({
      case: { historicals: legalCase.historicals.slice(0, -1) }
    });
    expect(wrapper.find('tr')).toHaveLength(2);
  });

  it('should render a <p/> element with the .Empty class if there are no historics to show', () => {
    wrapper.setProps({
      case: { historicals: [] }
    });
    expect(wrapper.exists(`p.${classes.Empty}`)).toBeTruthy();
  });

  it('should not render a <table /> element if there are no historics to show', () => {
    wrapper.setProps({
      case: { historicals: [] }
    });
    expect(wrapper.exists('table')).toBeFalsy();
  });
});

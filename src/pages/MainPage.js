import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../store/actions';

import Cases from '../components/Cases/Cases';
import Input from '../components/UI/Input/Input';

const MainPage = (props) => {
  return (
    <div>
      <Input placeholder="Pesquisar..." onUserType={props.onFilterByTitle} />
      <div style={{height: '20px'}}></div>
      <Cases perPage={10}/>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
	return {
		onFilterByTitle: title => dispatch(actions.filterByTitle(title))
	};
};

export default connect(null, mapDispatchToProps)(MainPage);

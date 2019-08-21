import React from 'react';

import Cases from '../components/Cases/Cases';
import Input from '../components/UI/Input/Input';

const MainPage = () => {
  return (
    <div>
      <Input placeholder="Pesquisar..."/>
      <div style={{height: '20px'}}></div>
      <Cases perPage={10}/>
    </div>
  );
};

export default MainPage;

import React from 'react';

import Cases from '../components/Cases/Cases';
import Input from '../components/UI/Input/Input';

const MainPage = () => {
  return (
    <div>
      <Input placeholder="Pesquisar..."/>
      <Cases />
    </div>
  );
};

export default MainPage;

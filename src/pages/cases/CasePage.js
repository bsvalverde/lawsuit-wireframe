import React from 'react';

const CasePage = (props) => {
  const caseNumber = props.match.params.id;
  return <p>case #{caseNumber}</p>
};

export default CasePage;

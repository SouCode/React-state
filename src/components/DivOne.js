import React from 'react';
import DivTwo from './DivTwo';

function DivOne(props) {
  // Extract the state and update function from props
  const { state, updateCapitalization } = props;

  return (
    <div>
      <DivTwo state={state} updateCapitalization={updateCapitalization} />
    </div>
  );
}

export default DivOne;

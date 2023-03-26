import React, { useState } from 'react';

function DivThree(props) {
  const [state, setState] = useState({
    name: props.name,
    caps: false
  });

  const updateCapitalization = () => {
    const newState = {
      name: state.caps ? state.name.toLowerCase() : state.name.toUpperCase(),
      caps: !state.caps
    };
    setState(newState);
  };

  return (
    <div>
      <h3 onClick={updateCapitalization}>{state.name}</h3>
    </div>
  );
}

export default DivThree;

import React, { Component } from 'react';
import DivThree from './DivThree';

class DivTwo extends Component {
  render() {
    const { name } = this.props;

    return (
      <div>
        <DivThree name={name} />
      </div>
    );
  }
}

export default DivTwo;

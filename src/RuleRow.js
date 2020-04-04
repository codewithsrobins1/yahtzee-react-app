import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {
  render() {
    const {score, name, doScore, description} = this.props;
    const disabled = score !== undefined;
    return (
      <tr 
        className={`RuleRow RuleRow-${this.props.score === undefined ? 'active' : 'disabled'}`} // Decide if active or disabled is going to be added to the class below
        onClick={disabled ? null : doScore}
      >
        <td className="RuleRow-name">{name}</td>
        <td className="RuleRow-score">{disabled ? score : description}</td> 
      </tr>
    )
  }
}

export default RuleRow;
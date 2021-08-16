import React, { Component } from 'react';

class Select extends Component {
  render() {
    const { selectValue, name, options, onChange, labelText } = this.props;
    return (
      <label htmlFor={ name }>
        { labelText }
        <select value={ selectValue } id={ name } name={ name } onChange={ onChange }>
          {options.map(({ value }) => <option key={ value } value={ value }>{value}</option>)}
        </select>
      </label>
    );
  }
}

export default Select;

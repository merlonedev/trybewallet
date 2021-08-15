import React, { Component } from 'react';

class Select extends Component {
  render() {
    const { selectValue, name, options, onChange, labelText } = this.props;
    return (
      <label htmlFor={ name }>
        { labelText }
        <select value={ selectValue } id={ name } name={ name } onChange={onChange}>
          {options.map((option) => <option key={ option.name } value={option.value}>{option.name}</option>)}
        </select>
      </label>
    );
  }
}

export default Select;

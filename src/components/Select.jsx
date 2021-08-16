import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { selectValue, name, options, onChange, labelText } = this.props;
    return (
      <label htmlFor={ name }>
        { labelText }
        <select value={ selectValue } id={ name } name={ name } onChange={ onChange }>
          {
            options.map(({ value }) => (
              <option key={ value } value={ value }>{value}</option>
            ))
          }
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  selectValue: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func,
  labelText: PropTypes.string,
}.isRequired;

export default Select;

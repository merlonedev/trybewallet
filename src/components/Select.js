import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { id, onChange, name, options, value } = this.props;
    return (
      <label htmlFor={ id }>
        { name }
        <select
          id={ id }
          onChange={ onChange }
          value={ value }
        >
          {
            options.map((option) => (
              <option
                value={ option }
                key={ option }
              >
                { option }
              </option>))
          }
        </select>
      </label>
    );
  }
}

const { string, func, object, arrayOf, oneOfType } = PropTypes;

Select.propTypes = {
  id: string.isRequired,
  onChange: func.isRequired,
  name: string,
  value: string.isRequired,
  options: oneOfType([arrayOf(string), arrayOf(object)]),
};

Select.defaultProps = {
  name: '',
  options: [],
};

export default Select;

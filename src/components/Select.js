import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { id, testId, onChange, name, options, value } = this.props;
    return (
      <label htmlFor={ id }>
        { name }
        <select
          id={ id }
          data-testid={ testId }
          onChange={ onChange }
          value={ value }
        >
          {
            options.map((option) => (
              <option
                value={ typeof (option) === 'object' ? Object.values(option) : option }
                key={ typeof (option) === 'object' ? Object.values(option) : option }
              >
                { typeof (option) === 'object' ? Object.values(option) : option }
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
  testId: string,
  onChange: func.isRequired,
  name: string,
  value: string.isRequired,
  options: oneOfType([arrayOf(string), arrayOf(object)]),
};

Select.defaultProps = {
  name: '',
  options: [],
  testId: null,
};

export default Select;

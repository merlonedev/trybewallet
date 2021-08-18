import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { id, value, testId, onChange, name, options } = this.props;
    return (
      <label htmlFor={ id }>
        { name }
        <select
          id={ id }
          data-testid={ testId }
          onChange={ onChange }
        >
          {
            options.map((option) => (
              <option
                value={ value }
                key={ `option[${Object.keys(option)}]` }
              >
                { typeof (option) === 'object' ? Object.values(option) : option}
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
  value: string,
  testId: string,
  onChange: func.isRequired,
  name: string,
  options: oneOfType([arrayOf(string), arrayOf(object)]),
};

Select.defaultProps = {
  value: '',
  name: '',
  options: [],
  testId: null,
};

export default Select;

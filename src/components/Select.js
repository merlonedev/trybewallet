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
          value={ value }
          data-testid={ testId }
          onChange={ onChange }
        >
          {
            options.map((option) => (
              <option
                value={ Object.keys(option) }
                key={ Object.keys(option) }
              >
                { Object.values(option) }
              </option>))
          }
        </select>
      </label>
    );
  }
}

const { string, func, arrayOf } = PropTypes;

Select.propTypes = {
  id: string.isRequired,
  value: string,
  testId: string,
  onChange: func.isRequired,
  name: string,
  options: arrayOf(PropTypes.object),
};

Select.defaultProps = {
  value: '',
  name: '',
  options: [],
  testId: null,
};

export default Select;

import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { props: { name, type, label, value, testid, handleChange } } = this;
    return (
      <form>
        <label htmlFor={ name }>
          { label }
          <input
            id={ name }
            type={ type }
            name={ name }
            value={ value }
            onChange={ handleChange }
            data-testid={ testid }
          />
        </label>
      </form>
    );
  }
}

const { string, func } = PropTypes;
Input.propTypes = {
  name: string.isRequired,
  type: string.isRequired,
  label: string.isRequired,
  value: string.isRequired,
  testid: string.isRequired,
  handleChange: func.isRequired,
};

export default Input;

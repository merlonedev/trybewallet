import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { props: { name, type, label, value, testid } } = this;
    return (
      <form>
        <label htmlFor="input">
          { label }
          <input
            type={ type }
            name={ name }
            value={ value }
            data-testid={ testid }
          />
        </label>
      </form>
    );
  }
}

const { string } = PropTypes;
Input.propTypes = {
  name: string.isRequired,
  type: string.isRequired,
  label: string.isRequired,
  value: string.isRequired,
  testid: string.isRequired,
};

export default Input;

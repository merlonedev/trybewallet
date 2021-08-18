import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { id, placeholder, type, value, testId, onChange, name } = this.props;
    return (
      <label htmlFor={ id }>
        { name }
        <input
          id={ id }
          placeholder={ placeholder }
          type={ type }
          value={ value }
          data-testid={ testId }
          onChange={ onChange }
        />
      </label>
    );
  }
}

const { string, func, number, oneOfType } = PropTypes;

Input.propTypes = {
  id: string.isRequired,
  placeholder: string,
  type: string,
  value: oneOfType([string, number]),
  testId: string,
  onChange: func.isRequired,
  name: string,
};

Input.defaultProps = {
  value: '',
  name: '',
  placeholder: '',
  type: 'text',
  testId: null,
};

export default Input;

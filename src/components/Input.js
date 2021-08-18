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

const { string, func } = PropTypes;

Input.propTypes = {
  id: string.isRequired,
  placeholder: string,
  type: string,
  value: string,
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

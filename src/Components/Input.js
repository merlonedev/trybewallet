import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { type, name, label, onChange, value, testId } = this.props;
    return (
      <div>
        <label htmlFor={ name }>
          { label }
        </label>
        <input
          name={ name }
          data-testid={ testId }
          type={ type }
          value={ value }
          onChange={ onChange }
        />
      </div>
    );
  }
}
Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;

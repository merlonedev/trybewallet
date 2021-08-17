import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { testID, type, placeholder, onChange, name, value } = this.props;
    return (
      <input
        value={ value }
        type={ type }
        data-testid={ testID }
        placeholder={ placeholder }
        onChange={ onChange }
        name={ name }
      />
    );
  }
}

Input.propTypes = {
  testID: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Input;

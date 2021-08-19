import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { id, name, type, value, onChange } = this.props;
    return (
      <label htmlFor={ id }>
        { id }
        <input
          id={ id }
          name={ name }
          type={ type }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;

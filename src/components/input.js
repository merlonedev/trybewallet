import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const {
      label,
      name,
      testId,
      inputType,
      inputPlaceholder,
      onChange,
      value,
    } = this.props;
    return (
      <div>
        <label htmlFor={ name }>
          { label }
        </label>
        <input
          id={ name }
          name={ name }
          data-testid={ testId }
          type={ inputType }
          placeholder={ inputPlaceholder }
          onChange={ onChange }
          value={ value }
        />
      </div>
    );
  }
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  testId: PropTypes.string,
  inputType: PropTypes.string.isRequired,
  inputPlaceholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

Input.defaultProps = {
  testId: '',
};

export default Input;

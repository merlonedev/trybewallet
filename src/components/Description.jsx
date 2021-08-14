import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Description extends Component {
  render() {
    const { name, label, type, value, testId, onChange } = this.props;

    return (
      <label htmlFor={ name }>
        { label }
        <input
          type={ type }
          name={ name }
          value={ value }
          id={ name }
          data-testid={ testId }
          onChange={ onChange }
        />
      </label>
    );
  }
}

export default Description;

Description.defaultProps = {
  label: '',
  testId: '',
};

Description.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  testId: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

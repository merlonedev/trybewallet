import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Value extends Component {
  render() {
    const { name, label, type, value, testId, onChange } = this.props;

    return (
      <div>

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

      </div>
    );
  }
}

export default Value;

Value.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  testId: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

Value.defaultProps = {
  label: '',
  testId: '',
};

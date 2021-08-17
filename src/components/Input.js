import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { id, labelText, dataTest, value, handleChange, type } = this.props;
    return (
      <label htmlFor={ id }>
        { labelText }
        <input
          data-testid={ dataTest }
          name={ id }
          value={ value }
          onChange={ handleChange }
          id={ id }
          type={ type }
        />
      </label>
    );
  }
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  dataTest: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  handleChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default Input;

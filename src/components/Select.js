import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { id, labelText, dataTest, value, handleChange, options } = this.props;
    return (
      <label htmlFor={ id }>
        { labelText }
        <select
          data-testid={ dataTest }
          name={ id }
          value={ value }
          onChange={ handleChange }
          id={ id }
        >
          { options.length ? options
            .map((item) => <option key={ item }>{ item }</option>) : '' }
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  dataTest: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Select;

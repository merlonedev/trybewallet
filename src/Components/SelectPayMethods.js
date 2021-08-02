import React from 'react';
import PropTypes from 'prop-types';

class SelectPayMethods extends React.Component {
  render() {
    const { id, label, options } = this.props;
    return (
      <label htmlFor={ id }>
        { label }
        <select
          id={ id }
        >
          {options.map(({ value, text }) => (
            <option
              key={ value }
            >
              { text }
            </option>
          ))}
        </select>
      </label>
    );
  }
}

SelectPayMethods.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    text: PropTypes.string,
  })).isRequired,
};

export default SelectPayMethods;

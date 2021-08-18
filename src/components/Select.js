import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { props: { name, label, options, value, handleChange } } = this;
    return (
      <form>
        <label htmlFor={ name }>
          { label }
          <select
            id={ name }
            name={ name }
            value={ value }
            onChange={ handleChange }
          >
            { options.map(
              ({ val, lab }) => <option key={ lab } value={ val }>{ lab }</option>,
            )}
          </select>
        </label>
      </form>
    );
  }
}

const { string, arrayOf, func } = PropTypes;

Select.propTypes = {
  options: arrayOf(string).isRequired,
  name: string.isRequired,
  label: string.isRequired,
  value: string.isRequired,
  handleChange: func.isRequired,
};

export default Select;

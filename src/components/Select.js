import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { props: { name, label, options } } = this;
    return (
      <form>
        <label htmlFor={ name }>
          <select
            id={ name }
            label={ label }
            name={ name }
          >
            { options.map(
              ({ value, lab }) => <option key={ value } value={ value }>{ lab }</option>,
            )}
          </select>
        </label>
      </form>
    );
  }
}

const { string, arrayOf } = PropTypes;

Select.propTypes = {
  options: arrayOf(string).isRequired,
  name: string.isRequired,
  label: string.isRequired,
};

export default Select;

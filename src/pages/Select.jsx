import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { name, labelText, selectedOption, onSelectedChange,
      optionList } = this.props;
    return (
      <label
        htmlFor={ name }
      >
        { labelText }
        <select
          id={ name }
          value={ selectedOption }
          onChange={ onSelectedChange }
        >
          {/* { console.log(optionList) } */}
          { optionList.map((element) => (
            <option
              key={ element.value }
              value={ element.value }
            >
              { element.content }
            </option>
          ))}
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  selectedOption: PropTypes.string.isRequired,
  onSelectedChange: PropTypes.func.isRequired,
  optionList: PropTypes.shape({
    map: PropTypes.func.isRequired,
  }).isRequired,
};

export default Select;

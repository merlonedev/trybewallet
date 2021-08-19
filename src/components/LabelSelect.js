import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LabelSelect extends Component {
  render() {
    const { htmlFor,
      array, id, target, nome } = this.props;
    return (
      <div>
        <label htmlFor={ htmlFor }>
          {nome}
          <select name={ nome } id={ id } onChange={ target }>
            {array.map((item) => (
              <option key={ item } value={ item }>{item}</option>
            ))}
          </select>
        </label>
      </div>
    );
  }
}

LabelSelect.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  array: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.string.isRequired,
  target: PropTypes.func.isRequired,
  nome: PropTypes.string.isRequired,
};
export default LabelSelect;

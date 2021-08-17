import React from 'react';
import PropTypes from 'prop-types';

class AddExpDescription extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="Descrição">
        Descrição
        <input
          name="description"
          id="Descrição"
          value={ value }
          placeholder="Adicione a descrição de sua despesa"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

AddExpDescription.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default AddExpDescription;

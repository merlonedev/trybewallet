import React from 'react';
import propTypes from 'prop-types';

class WalletDescriptionInput extends React.Component {
  render() {
    const { handleChange } = this.props;
    return (
      <label htmlFor="descricao">
        Descrição
        <input
          type="text"
          id="descricao"
          name="description"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

WalletDescriptionInput.propTypes = {
  handleChange: propTypes.func.isRequired,
};

export default WalletDescriptionInput;

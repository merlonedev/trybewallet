import React from 'react';
import propTypes from 'prop-types';

class WalletValueInput extends React.Component {
  render() {
    const { handleChange } = this.props;
    return (
      <label htmlFor="valor">
        Valor
        <input
          type="text"
          id="valor"
          name="value"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

WalletValueInput.propTypes = {
  handleChange: propTypes.func.isRequired,
};

export default WalletValueInput;

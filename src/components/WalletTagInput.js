import React from 'react';
import propTypes from 'prop-types';

class WalletTagInput extends React.Component {
  render() {
    const { handleChange } = this.props;
    return (
      <label htmlFor="tag">
        Tag&nbsp;
        <select
          className="select"
          type="text"
          id="tag"
          name="tag"
          onChange={ handleChange }
        >
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </label>
    );
  }
}

WalletTagInput.propTypes = {
  handleChange: propTypes.func.isRequired,
};

export default WalletTagInput;

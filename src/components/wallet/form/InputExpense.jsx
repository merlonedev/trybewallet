import React from 'react';
import PropTypes from 'prop-types';

class InputText extends React.Component {
  render() {
    const { expense, onChange } = this.props;

    return (
      <label htmlFor="wallet-expense">
        Descrição
        <input
          type="text"
          name="description"
          value={ expense }
          id="wallet-expense"
          onChange={ onChange }
          placeholder="Sua despesa"
        />
      </label>
    );
  }
}

InputText.propTypes = {
  expense: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputText;

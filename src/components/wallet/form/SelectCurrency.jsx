import React from 'react';

class SelectCurrency extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="wallet-currency">
          Moeda
          <select name="currency" id="wallet-currency">
            <option value="BRL">BRL</option>
          </select>
        </label>
      </div>
    );
  }
}

export default SelectCurrency;

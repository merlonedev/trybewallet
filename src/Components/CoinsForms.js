import React, { Component } from 'react';

export default class CoinsForms extends Component {
  render() {
    return (
      <label htmlFor="currency">
        Moedas
        {/* <select id="currency">
              { coinsMap.map((item, index) => (
                <option key={ index } value={ item }>{item}</option>))}
            </select> */}
      </label>
    );
  }
}

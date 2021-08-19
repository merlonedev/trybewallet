import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Moedas extends Component {
  constructor(props) {
    super(props);
    this.moedas = this.moedas.bind(this);
  }

  moedas() {
    const { moedas } = this.props;
    const moedasKey = Object.keys(moedas);
    return moedasKey.map(
      (moeda) => <option key={ moeda } value={ moeda }>{ moeda }</option>,
    );
  }

  render() {
    return (
      <label htmlFor="moeda">
        Moeda
        <select id="moeda">
          { this.moedas() }
        </select>
      </label>
    );
  }
}

Moedas.propTypes = {
  moedas: PropTypes.objectOf.isRequired,
};

import React, { Component } from 'react';
import PropTypes, { string } from 'prop-types';
import { connect } from 'react-redux';
import { fetchAPI } from '../actions/index';

class Currencies extends Component {
  constructor() {
    super();
    this.state = {
      currency: 'USD',
    };
  }

  componentDidMount() {
    const { coinsToRedux } = this.props;
    coinsToRedux();
  }

  render() {
    const { currency } = this.state;
    const { currenciesFromRedux } = this.props;
    return (
      <label htmlFor="moedas">
        Moeda
        <select id="moedas" value={ currency }>
          {currenciesFromRedux
            .map((curr) => <option key={ curr }>{curr}</option>)}
        </select>
      </label>
    );
  }
}

const mapStateToProps = (state) => ({
  currenciesFromRedux: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  coinsToRedux: () => dispatch(fetchAPI()),
});

Currencies.propTypes = {
  currenciesFromRedux: PropTypes.arrayOf(string).isRequired,
  coinsToRedux: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Currencies);

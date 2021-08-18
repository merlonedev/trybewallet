import React, { Component } from 'react';
import PropTypes, { string } from 'prop-types';
import { connect } from 'react-redux';
import { fetchAPI } from '../actions/index';

class Currencies extends Component {
  componentDidMount() {
    const { coinsToRedux } = this.props;
    coinsToRedux();
  }

  render() {
    const { currenciesFromRedux, name, value, onChange } = this.props;
    return (
      <label htmlFor="currency">
        Moeda
        <select id="currency" value={ value } onChange={ onChange } name={ name }>
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
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Currencies);

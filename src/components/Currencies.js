import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Currencies extends Component {
  render() {
    const { currencies } = this.props;
    if (!currencies) return null;
    return (
      <>
        {currencies.map((item, index) => <option key={ index }>{ item }</option>)}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(Currencies);

Currencies.propTypes = {
  currencies: PropTypes.arrayOf(Object),
};

Currencies.defaultProps = {
  currencies: undefined,
};

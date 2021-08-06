import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchApiThunk } from '../actions/index';

class Currency extends React.Component {
  componentDidMount() {
    const { importedCurrencies } = this.props;
    importedCurrencies();
  }

  render() {
    const { currencies } = this.props;
    return (

      <label htmlFor="currency">
        Moeda:
        <select type="text" name="currency" id="currency">
          {
            currencies.map((moeda) => (<option key={ moeda }>{ moeda }</option>))
          }
        </select>
      </label>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.wallet.isLoading,
  currencies: state.wallet.currencies,
});
const mapDispatchToProps = (dispatch) => ({
  importedCurrencies: () => dispatch(fetchApiThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Currency);

Currency.propTypes = {
  currencies: PropTypes.shape.isRequired,
  importedCurrencies: PropTypes.func.isRequired,
};

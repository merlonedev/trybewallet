import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencyAction } from '../../actions';

class Moeda extends React.Component {
  componentDidMount() {
    const { func } = this.props;
    func();
  }

  render() {
    const { currencies, value, handlechange } = this.props;
    return (
      <div>
        <label htmlFor="currency">
          Moeda:
          <select value={ value } onChange={ handlechange } id="currency" name="currency">
            {
              currencies
                .map((currencyName) => (
                  <option
                    key={ currencyName }
                  >
                    {currencyName}
                  </option>
                ))
            }
          </select>
        </label>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchtoProps = (dispatch) => ({
  func: () => dispatch(fetchCurrencyAction()),
});

Moeda.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  handlechange: PropTypes.func.isRequired,
  func: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchtoProps)(Moeda);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deletItem } from '../actions';

class TableTd extends Component {
  constructor(props) {
    super(props);
    this.table = this.table.bind(this);
    this.dispathc = this.dispathc.bind(this);
  }

  componentDidUpdate() {
    const { wallet: { expenses }, counter, getTotal } = this.props;
    const { exchangeRates } = expenses[0];
    const array = Object.entries(exchangeRates)
      .filter((item) => item[0] === expenses[0].currency);
    getTotal((expenses[counter].value * array[counter][1].ask));
  }

  dispathc() {
    const { wallet: { expenses } } = this.props;
    const { submit } = this.props;
    submit(expenses[0]);
  }

  table() {
    const { wallet: { expenses } } = this.props;

    if (expenses.length > 1) {
      const { exchangeRates } = expenses[1];
      const array = Object.entries(exchangeRates)
        .filter((item) => item[0] === expenses[1].currency);
      const array2 = array[0][1].ask;
      return (
        <tr>
          <td>{expenses[1].description}</td>
          <td>{expenses[1].tag}</td>
          <td>{expenses[1].method}</td>
          <td>{expenses[1].value}</td>
          <td>{array[0][1].name}</td>
          <td>{(+array2).toFixed(2)}</td>
          <td>{(expenses[1].value * array[0][1].ask).toFixed(2)}</td>
          <td><p>Real</p></td>
          <td>
            <button
              type="button"
              data-testid="delete-btn"
              onClick={ this.dispathc }
            >
              Delet
            </button>
          </td>
        </tr>
      );
    }
  }

  render() {
    const { wallet: { expenses }, counter } = this.props;
    const { exchangeRates } = expenses[0];
    const array = Object.entries(exchangeRates)
      .filter((item) => item[0] === expenses[0].currency);
    const array2 = array[counter][1].ask;
    return (
      <>
        <tr>
          <td>{expenses[counter].description}</td>
          <td>{expenses[counter].tag}</td>
          <td>{expenses[counter].method}</td>
          <td>{expenses[counter].value}</td>
          <td>{array[counter][1].name}</td>
          <td>{(+array2).toFixed(2)}</td>
          <td>{(expenses[counter].value * array[counter][1].ask).toFixed(2)}</td>
          <td><p>Real</p></td>
          <td>
            <button
              type="button"
              data-testid="delete-btn"
              onClick={ this.dispathc }
            >
              Delet
            </button>
          </td>
        </tr>
        { this.table() }
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  wallet: state.wallet,
});

const mapDispatchToProps = (dispathc) => ({
  submit: (state) => dispathc(deletItem(state)),
});

TableTd.propTypes = {
  wallet: PropTypes.shape({
    expenses: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  counter: PropTypes.number.isRequired,
  submit: PropTypes.func.isRequired,
  getTotal: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TableTd);

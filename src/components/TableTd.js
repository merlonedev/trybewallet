import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class TableTd extends Component {
  constructor(props) {
    super(props);
    this.table = this.table.bind(this);
  }

  table() {
    const { wallet: { expenses } } = this.props;
    if (expenses.length > 1) {
      const { exchangeRates } = expenses[1];
      const array = Object.entries(exchangeRates)
        .filter((item) => item[0] === expenses[1].currency);
      const array2 = array[0][1].ask;
      console.log(array2);
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
          <td>{}</td>
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
          <td>{}</td>
        </tr>
        { this.table() }
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  wallet: state.wallet,
});

TableTd.propTypes = {
  wallet: PropTypes.shape({
    expenses: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  counter: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(TableTd);

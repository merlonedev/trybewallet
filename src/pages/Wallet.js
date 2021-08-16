import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Form from '../components/Form';
import Table from '../components/Table';
import { walletSubmit } from '../actions';
import '../styles/wallet.css';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchApi } = this.props;
    fetchApi();
  }

  handleTotal() {
    const { valorTotal } = this.props;
    return valorTotal
      .reduce(
        (acc, ele) => acc
      + (Number(ele.value) * Number(ele.exchangeRates[ele.currency].ask)),
        0,
      );
  }

  render() {
    const {valorTotal} = this.props;
    return (
      <div className="WalletBody">
        <Header valorTotal={ (this.handleTotal()).toFixed(2) } />
        <Form />
        <Table  expenses={valorTotal}/>
      </div>
    );
  }
}

Wallet.propTypes = {
  fetchApi: PropTypes.func.isRequired,
  valorTotal: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  valorTotal: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchApi: () => dispatch(walletSubmit()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

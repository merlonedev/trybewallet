import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AddForm from '../components/AddForm';
import ExpensesTable from '../components/ExpensesTable';
import Header from '../components/Header';
import '../styles/wallet.css';

class Wallet extends React.Component {
  render() {
    const { expenses } = this.props;
    return (
      <div>
        <Header />
        <AddForm />
        <ExpensesTable expenses={ expenses } />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Wallet);

Wallet.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.objectOf),
};

Wallet.defaultProps = {
  expenses: undefined,
};

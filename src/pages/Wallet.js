import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { newCurrencies } from '../actions';
import Formulario from '../component/Formulario';
import Header from '../component/Header';
import Table from '../component/Table';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((r) => r.json())
      .then((r) => {
        const { Currencies } = this.props;
        Currencies(r);
      });
  }

  render() {
    const { email } = this.props;
    return (
      <section>
        <Header email={ email } />
        <Formulario />
        <Table />
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  Currencies: (value) => dispatch(newCurrencies(value)),
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  Currencies: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

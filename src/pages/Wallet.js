import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Formulario from '../components/Formulario';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <header>
          <h1>Trybe Wallet</h1>
          <h3 data-testid="email-field">{`E-mail: ${email}`}</h3>
          <h3 data-testid="total-field">Gasto total: 0 </h3>
          <h3 data-testid="header-currency-field">Câmbio atual: BRL </h3>
        </header>
        <Formulario />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ email: state.user.email });

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);

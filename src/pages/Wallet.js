import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Formulario from '../components/Formulario';
import { GET_API } from '../actions/index';

class Wallet extends React.Component {
  componentDidMount() {
    const { api } = this.props;
    api();
  }

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
const mapDispatchToProps = (dispatch) => ({ api: (value) => dispatch(GET_API(value)) });

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  api: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

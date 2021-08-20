import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import logo from '../wallet.png';
import { saveEmailAction } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  handleEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  handlePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  render() {
    const { email, password } = this.state;
    const { saveEmail, history } = this.props;
    const REG_EX_EMAIL = /^([\w\d._\-#])+@([\w\d._\-#]+[.][\w\d._\-#]+)+$/;
    const passwordLength = 5;
    return (
      <form>
        <img src={ logo } width="50" alt="logo Trybe" />
        <input
          data-testid="email-input"
          type="email"
          placeholder="Email"
          onChange={ this.handleEmail }
        />
        <input
          data-testid="password-input"
          type="password"
          placeholder="Senha"
          onChange={ this.handlePassword }
        />
        <button
          type="submit"
          disabled={ !REG_EX_EMAIL.test(email) || password.length <= passwordLength }
          onClick={ (e) => {
            e.preventDefault();
            saveEmail(email);
            history.push('/carteira');
          } }
        >
          Entrar
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveEmail: (email) => dispatch(saveEmailAction(email)),
});

Login.propTypes = {
  saveEmail: PropTypes.func.isRequired,
  history: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionLogin } from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { history: { push } } = this.props;
    const regEx = /^[a-z0-9_.-]+@[a-z]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/i;
    const minLength = 6;
    const { email, password } = this.state;
    const isEnabled = regEx.test(email) && password.length >= minLength;
    const { loginInfo } = this.props;

    return (
      <form>
        <label
          htmlFor="input-email"
        >
          E-mail:
          <input
            type="email"
            name="email"
            id="input-email"
            pattern="/^[a-z0-9_.-]+@[a-z]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/"
            value={ email }
            onChange={ this.handleChange }
            data-testid="email-input"
          />
        </label>
        <label
          htmlFor="input-senha"
        >
          Senha:
          <input
            type="password"
            name="password"
            value={ password }
            onChange={ this.handleChange }
            id="input-senha"
            data-testid="password-input"
          />
        </label>
        <button
          type="button"
          disabled={ !isEnabled }
          onClick={ () => {
            loginInfo(email);
            push('/carteira');
          } }
        >
          Entrar
        </button>
      </form>
    );
  }
}

// utilizei o RegEx fornecido pelo Rodrigo Merlone no canal do Slack

Login.propTypes = {
  history: PropTypes.arrayOf().isRequired,
  push: PropTypes.func.isRequired,
  loginInfo: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  loginInfo: (state) => dispatch(actionLogin(state)) });

export default connect(null, mapDispatchToProps)(Login);

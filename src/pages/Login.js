import React, { Component } from 'react';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handlerChangeLogin = this.handlerChangeLogin.bind(this);
    this.verifyLength = this.verifyLength.bind(this);
    this.verifyEmail = this.verifyEmail.bind(this);
    this.disableCheck = this.disableCheck.bind(this);
  }

  verifyLength(password) {
    const validLength = 6;
    if (password.length >= validLength) return password.length;
  }

  verifyEmail(email) {
    const checkEmail = 'alguem@alguem.com';
    if (checkEmail !== email) {
      return false;
    }
    return true;
  }

  disableCheck() {
    const { email, password } = this.state;
    const accept = this.verifyEmail(email) && this.verifyLength(password);
    if (accept !== true) {
      return false;
    } return true;
  }

  handlerChangeLogin({ target }) {
    this.setState = {
      [target.name]: target.value,
    };
  }

  render() {
    return (
      <div>
        <h2>Trybe Wallet</h2>
        <label htmlFor="email-input">
          <input
            placeholder="Digite seu email"
            type="email"
            name="email"
            data-testid="email-input"
            required
            onChange={ this.handlerChangeLogin }
          />
        </label>
        <label htmlFor="password-input">
          <input
            placeholder="Digite sua senha"
            type="password"
            password="password"
            data-testid="password-input"
            required
            onChange={ this.handlerChangeLogin }
          />
        </label>
        <button
          type="button"
          disabled={ !this.disableCheck() }
        >
          Entrar
        </button>
      </div>
    );
  }
}

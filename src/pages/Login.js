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
  }

  verifyLength() {
    const { password, email } = this.state;
    const validLength = 6;
    const validEmail = 'alguem@alguem.com';
    if (password >= validLength && email === validEmail) return true;
  }

  handlerChangeLogin({ target }) {
    this.setState = {
      [target.name]: target.value,
    };
  }

  render() {
    return (
      // const { email, password } = this.state;
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
          disabled={ !this.verifyLength() }
        >
          Entrar
        </button>
      </div>
    );
  }
}

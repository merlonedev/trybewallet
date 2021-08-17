import React from 'react';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      enableToLogin: false,
    };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  handleValidate() {
    const { email, password } = this.state;
    const regexChecker = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const minPasswordLength = 6;
    return (regexChecker.test(email) && password.length >= minPasswordLength);
  }

  render() {
    const { email, password } = this.state;
    return (
      <main>
        <h1>Trybe-Wallet</h1>
        <label htmlFor="email-input">
          Email:
          <br />
          <input
            type="text"
            data-testid="email-input"
            name="email"
            value={ email }
            onChange={ this.handleInput }
          />
        </label>
        <br />
        <label htmlFor="password-input">
          Senha:
          <br />
          <input
            type="password"
            data-testid="password-input"
            name="password"
            value={ password }
            onChange={ this.handleInput }
          />
        </label>
        <br />
        <button
          type="button"
          disabled={ !this.handleValidate() }
        >
          ENTRAR
        </button>
      </main>
    );
  }
}

export default Login;

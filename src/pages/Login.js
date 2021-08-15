import React, { Component } from 'react';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  verifyLength() {
    const { password, email } = this.state;
    const validLength = 6;
    const validEmail = 'alguem@alguem.com';
    if (password >= validLength && email.value === validEmail) return true;
  }

  // handlerChange({ target }) {
  //   const { email, password } = target.name;
  //   if (password.lentgh >= minPassword && email.value === validEmail) {
  //     this.setState = {
  //       email,
  //       password,
  //     };
  //   }
  // }

  render() {
    return (
      // const { email, password } = this.state;
      <div>
        <label htmlFor="email-input">
          <input
            placeholder="Digite seu email"
            type="email"
            name="email"
            data-testid="email-input"
            required
            // onChange = { email }
          />
        </label>
        <label htmlFor="password-input">
          <input
            placeholder="Digite sua senha"
            type="password"
            password="password"
            data-testid="password-input"
            required
            // onChange={this.handlerChange}
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

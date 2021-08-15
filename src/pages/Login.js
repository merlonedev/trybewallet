import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <form>
          <label className="label-login" htmlFor="email">
            Email:
            <input
              id="email"
              type="email"
              value={ email }
              data-testid="email-input"
            />
            Senha
            <input
              id="password"
              type="email"
              value={ password }
              data-testid="password-input"
            />
          </label>
          <button
            type="button"
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

export default Login;

import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disabled: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleLogin() {
    const { email, password } = this.state;
    const emailLogin = email.split('@').length === 2 && email.split('.com')[1] === '';
    const lengthPass = 6;

    if (emailLogin && password.length > lengthPass) {
      this.setState({
        disabled: true,
      });
    } else {
      this.setState({
        disabled: false,
      });
    }
  }

  render() {
    const { email, password, disabled } = this.state;
    return (
      <form>
        <h1>Login</h1>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            id="email"
            data-testid="email-input"
            value={ email }
            onChange={ this.handleChange }
            onKeyUp={ this.handleLogin }
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            type="password"
            id="password"
            data-testid="password-input"
            value={ password }
            onChange={ this.handleChange }
            onKeyUp={ this.handleLogin }
          />
        </label>
        <button
          type="button"
          disabled={ !disabled }
        >
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;

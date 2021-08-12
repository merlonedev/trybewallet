import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;
    return (
      <form>
        <label htmlFor="email-input">
          Email:
          <input
            data-testid="email-input"
            type="text"
            name="email"
            onChange={ this.handleChange }
            value={ email }
          />
        </label>
        <label htmlFor="password-input">
          Password:
          <input
            data-testid="password-input"
            type="password"
            name="password"
            onChange={ this.handleChange }
            value={ password }
          />
        </label>
        <button type="button">
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;

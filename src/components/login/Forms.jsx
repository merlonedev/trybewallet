import React from 'react';

class Forms extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      disabled: 'disabled',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { handleChange } = this;
    const { email, password, disabled } = this.state;

    return (
      <div>
        <label htmlFor="login-email">
          Email:
          <input
            type="email"
            name="email"
            id="login-email"
            value={ email }
            onChange={ handleChange }
            data-testid="email-input"
          />
        </label>

        <label htmlFor="login-password">
          Senha:
          <input
            type="password"
            name="password"
            id="login-password"
            value={ password }
            onChange={ handleChange }
            data-testid="password-input"
          />
        </label>

        <button type="submit" disabled={ disabled }>
          Entrar
        </button>
      </div>
    );
  }
}

export default Forms;

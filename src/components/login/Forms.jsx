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
    this.validatingLogin = this.validatingLogin.bind(this);
  }

  // Regex para validação de email encontrada na internet
  // Link: https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/
  validatingLogin() {
    const { email, password } = this.state;
    const minLength = 5;
    const validatingEmail = /\S+@\S+\.\S+/.test(email);

    if (validatingEmail && password.length >= minLength) {
      this.setState({
        disabled: '',
      }, () => {});
    } else {
      this.setState({
        disabled: 'disabled',
      }, () => {});
    }
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    }, () => {});

    this.validatingLogin();
  }

  render() {
    const { handleChange } = this;
    const { email, password, disabled } = this.state;

    return (
      <form>
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
      </form>
    );
  }
}

export default Forms;

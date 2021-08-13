import React from 'react';
import { Link } from 'react-router-dom';

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      disable: true,
    };

    this.activateLoginButton = this.activateLoginButton.bind(this);
  }

  async saveFieldValue(field, value) {
    this.setState({ [field]: value }, () => this.activateLoginButton());
  }

  verifyPasswordLength(password) {
    if (password) {
      const passwordMinimumLength = 6;
      return password.length >= passwordMinimumLength;
    }
  }

  verifyEmailFormat(email) {
    if (email) {
      const firstVerification = email.includes('@');
      const secondVerification = email.endsWith('.com');
      return firstVerification && secondVerification;
    }
  }

  activateLoginButton() {
    const { emailInput, passwordInput } = this.state;
    const isBiggerThan = this.verifyPasswordLength(passwordInput);
    const isValidEmail = this.verifyEmailFormat(emailInput);
    if (isBiggerThan && isValidEmail) {
      this.setState({
        disable: false,
      });
    } else {
      this.setState({
        disable: true,
      });
    }
  }

  renderLoginFields() {
    const { disable } = this.state;
    return (
      <form>
        <input
          data-testid="email-input"
          name="emailInput"
          type="email"
          placeholder="e-mail"
          onChange={ ({ target }) => this.saveFieldValue(target.name, target.value) }
        />
        <input
          data-testid="password-input"
          name="passwordInput"
          type="password"
          placeholder="password"
          onChange={ ({ target }) => this.saveFieldValue(target.name, target.value) }
        />
        <Link to="/carteira">
          <button
            type="button"
            disabled={ disable }
          >
            Entrar
          </button>
        </Link>
      </form>
    );
  }

  render() {
    return this.renderLoginFields();
  }
}

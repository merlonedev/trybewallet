import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { saveUserEmail } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      emailInput: '',
      passwordInput: '',
      disable: true,
    };

    this.activateLoginButton = this.activateLoginButton.bind(this);
  }

  async saveFieldValue(field, value) {
    this.setState({ [field]: value }, () => this.activateLoginButton());
  }

  verifyPasswordLength(password) {
    const passwordMinimumLength = 6;
    return password.length >= passwordMinimumLength;
  }

  verifyEmailFormat(email) {
    const firstVerification = email.includes('@');
    const secondVerification = email.endsWith('.com');
    return firstVerification && secondVerification;
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
    const { disable, emailInput } = this.state;
    const { saveEmail } = this.props;
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
            onClick={ () => saveEmail(emailInput) }
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

const mapDispatchToProps = (dispatch) => ({
  saveEmail: (state) => dispatch(saveUserEmail(state)),
});

Login.propTypes = {
  saveEmail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);

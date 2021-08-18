import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { setEmail, setPassword } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      emailMessage: '',
      emailSpan: 'a',
      password: '',
      pwMessage: '',
      pwSpan: 'a',
      enable: true,
    };

    this.verifyEmail = this.verifyEmail.bind(this);
    this.verifyPassword = this.verifyPassword.bind(this);
    this.verifyCredentials = this.verifyCredentials.bind(this);
    this.sendCredentials = this.sendCredentials.bind(this);
  }

  verifyEmail(event) {
    const regex = /^[a-z0-9_.-]+@[a-z]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/;
    if (regex.test(event.target.value)) {
      console.log(event.target.value);
      this.setState({
        email: event.target.value,
        emailSpan: 'ok-color',
        emailMessage: 'e-mail válido!',
      });
    } else {
      this.setState({
        email: event.target.value,
        emailSpan: 'wrong-color',
        emailMessage: 'e-mail inválido!',
      });
    }
    this.verifyCredentials();
  }

  verifyPassword(event) {
    const { target: { value } } = event;
    const five = 4;
    if (value.length > five) {
      this.setState({
        password: value,
        pwSpan: 'ok-color',
        pwMessage: 'senha válida!',
      });
    } else {
      this.setState({
        password: value,
        pwSpan: 'wrong-color',
        pwMessage: 'senha inválida!',
      });
    }
    this.verifyCredentials();
  }

  verifyCredentials() {
    const { emailSpan, pwSpan } = this.state;
    if (emailSpan === 'ok-color' && pwSpan === 'ok-color') {
      // this.sendCredentials();
      this.setState({ enable: false });
    } else {
      this.setState({ enable: true });
    }
    this.setState({});
  }

  sendCredentials() {
    const { setNewEmail, setNewPassword, history } = this.props;
    const { email, password } = this.state;
    setNewEmail(email);
    setNewPassword(password);
    console.log('passou');
    history.push('/carteira');
  }

  render() {
    const { email, emailMessage, emailSpan,
      password, pwMessage, pwSpan, enable } = this.state;
    return (
      <form className="login-form">
        <label htmlFor="email-input">
          E-mail:
          <input
            name="email-input"
            type="email"
            data-testid="email-input"
            placeholder="Exemplo: nome@email.com"
            value={ email }
            onChange={ this.verifyEmail }
          />
        </label>
        <span className={ emailSpan } value={ emailMessage } />
        <br />
        <label htmlFor="password-input">
          Senha:
          <input
            name="password-input"
            type="password"
            data-testid="password-input"
            placeholder="Exemplo: 123456"
            value={ password }
            onChange={ this.verifyPassword }
          />
        </label>
        <span className={ pwSpan } value={ pwMessage } />
        <br />
        {/* <Button 
          name="entry-btn"
          disabled={ enable }
          label="Entrar"
          to="/carteira"
        /> */}
        <button
          name="entry-btn"
          type="submit"
          onClick={ this.sendCredentials }
          disabled={ enable }
        >
          Entrar
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setNewEmail: (newEmail) => dispatch(setEmail(newEmail)),
  setNewPassword: (newPassword) => dispatch(setPassword(newPassword)),
});

// /^[a-z0-9_.-]+@[a-z]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/
Login.propTypes = {
  setNewEmail: PropTypes.func.isRequired,
  setNewPassword: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);

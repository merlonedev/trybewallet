import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { emailAction } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this.validateEmail = this.validateEmail.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.validateSubmit = this.validateSubmit.bind(this);
  }

  validadeEmail() {
    const { email } = this.state;
    const validEmail = /\S+@\S+\.\S+/;
    if (validEmail.test(email)) {
      this.setState({
        email: value,
      });
    }
    return false;
  }

  validatePassword() {
    const { password } = this.state;
    const minLengthPassword = 6;
    if (password.length >= minLengthPassword) {
      this.setState({
        password: value,
      });
    }
  }

  submit() {
    const { email, password } = this.state;
    if (password && email) return false;

    return true;
  }

  render() {
    return (
      <div className="login-area">
        <input
          type="text"
          placeholder="Insira seu e-mail aqui :)"
          data-testid="email-input"
          onChange={ (email) => this.validateEmail(email) }
        />
        <input
          type="password"
          placeholder="Insira sua senha aqui"
          data-testid="password-input"
          onChange={ (password) => this.validatePassword(password) }
        />
        <Link to="/carteira">
          <button type="button" disabled={ this.submit() }>ENTRAR</button>
        </Link>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  emailValue: (value) => dispatch(emailAction(value)),
});

export default connect(null, mapDispatchToProps)(Login);

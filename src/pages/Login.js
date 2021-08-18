import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveLoginName } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      activateLogin: true,
      shouldRedirectToCarteira: false,
    };
    this.handleChangeInLoginInputs = this.handleChangeInLoginInputs.bind(this);
    this.activateLoginBtn = this.activateLoginBtn.bind(this);
    this.letsStart = this.letsStart.bind(this);
  }

  handleChangeInLoginInputs({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
    this.activateLoginBtn();
  }

  letsStart() {
    const { importLogin } = this.props;
    const { email } = this.state;
    importLogin(email);
    this.setState({
      shouldRedirectToCarteira: true,
    });
  }

  activateLoginBtn() {
    const { email, password } = this.state;
    const minimumPw = 5;
    const checkEmail = /.+@.+\.[A-Za-z]+$/;
    if (password.length >= minimumPw && checkEmail.test(email)) {
      this.setState({
        activateLogin: false,
      });
    } else {
      this.setState({
        activateLogin: true,
      });
    }
  }

  render() {
    const { email, password, activateLogin, shouldRedirectToCarteira } = this.state;

    if (shouldRedirectToCarteira) {
      return <Redirect to="/carteira" />;
    }

    return (
      <div>
        <label htmlFor="email">
          E-mail:
          <input
            data-testid="email-input"
            value={ email }
            type="text"
            id="email"
            name="email"
            onChange={ this.handleChangeInLoginInputs }
          />

        </label>
        <label htmlFor="password">
          Senha:
          <input
            data-testid="password-input"
            value={ password }
            type="password"
            id="password"
            name="password"
            onChange={ this.handleChangeInLoginInputs }
          />
        </label>
        <button
          type="button"
          disabled={ activateLogin }
          onClick={ this.letsStart }
        >
          Entrar
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  importLogin: (state) => dispatch(saveLoginName(state)),
});

Login.propTypes = {
  importLogin: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);

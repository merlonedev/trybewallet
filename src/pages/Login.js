import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveLoginName } from '../actions';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      activateLogin: true,
    };
    this.handleChangeInLogin = this.handleChangeInLogin.bind(this);
    this.letsStart = this.initStart.bind(this);
  }

  handleChangeInLogin({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
    this.activateLogin();
  }

  initStart() {
    const { importLogin } = this.props;
    const { email } = this.state;
    importLogin(email);
    this.setState({
      shouldRedirectToCarteira: true,
    });
  }

  activateBtnLogin() {
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
    const { email, password, activateLogin,
      shouldRedirectToCarteira } = this.state;

    if (shouldRedirectToCarteira) {
      return <Redirect to="/carteira" />;
    }
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
              onChange={ this.handleChangeInLogin }
            />
            Senha
            <input
              id="password"
              type="email"
              value={ password }
              data-testid="password-input"
              onChange={ this.handleChangeInLogin }
            />
          </label>
          <button
            type="button"
            disabled={ activateLogin }
            onClick={ this.initStart }
          >
            Entrar
          </button>
        </form>
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

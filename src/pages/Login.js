import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { userLogin } from '../actions/index';

const cinco = 5;
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.eventHandler = this.eventHandler.bind(this);
    this.validEmail = this.validEmail.bind(this);
    this.loginRedirect = this.loginRedirect.bind(this);
    this.state = {
      email: '',
      password: '',
      redirect: false,
      disabled: true,
    };
  }

  eventHandler({ target }) {
    this.setState({
      [target.name]: target.value,
    }, () => this.validEmail());
  }

  validEmail() {
    const { email, password } = this.state;
    if (/^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email) && password.length > cinco) {
      this.setState({
        disabled: false,
      });
    }
  }

  loginRedirect() {
    const { userEmail } = this.props;
    const { email } = this.state;
    userEmail(email);
    this.setState({
      redirect: true,
    });
  }

  render() {
    const { email, password, redirect, disabled } = this.state;
    if (redirect) return <Redirect { ...this.props } to="/carteira" />;

    return (
      <section className="LoginSection">
        <h1 className="Title">Acompanhe seus gastos com a gente</h1>
        <form className="LoginContainer">
          <input
            data-testid="email-input"
            type="text"
            placeholder="Email"
            className="email"
            name="email"
            value={ email }
            onChange={ this.eventHandler }
          />
          <input
            data-testid="password-input"
            type="password"
            placeholder="Senha"
            className="password"
            name="password"
            value={ password }
            onChange={ this.eventHandler }
          />
          <button
            disabled={ disabled }
            className="btn-login"
            onClick={ this.loginRedirect }
            type="button"
          >
            Entrar

          </button>
        </form>
      </section>
    );
  }
}

Login.propTypes = {
  userEmail: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  userEmail: (value) => dispatch(userLogin(value)),
});

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

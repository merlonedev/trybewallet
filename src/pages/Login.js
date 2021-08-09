import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './Login.css';
import getEmail from '../actions/index';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      enable: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.enableButton = this.enableButton.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleSubmit() {
    const { handleEmail } = this.props;
    const { email } = this.state;
    handleEmail(email);
    this.setState({ enable: true });
  }

  enableButton() {
    const { email, password } = this.state;
    const minPassword = 6;
    if (password.length >= minPassword) {
      const regex = /^[a-z0-9_.-]+@[a-z]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/;
      if (regex.test(email)) return true;
    }
    return false;
  }

  render() {
    const { email } = this.state;
    const { password, enable } = this.state;
    return (
      <div className="container">
        <h2>Login</h2>
        <form name="form">
          <div className="form-group">
            <label htmlFor="email">
              Email
              <input
                name="email"
                onChange={ this.handleChange }
                value={ email }
                type="email"
                data-testid="email-input"
                className="form-control"
              />
            </label>
          </div>
          <label htmlFor="password">
            Password
            <input
              name="password"
              onChange={ this.handleChange }
              data-testid="password-input"
              type="password"
              className="form-control"
              value={ password }
            />
          </label>
          <div className="form-group">
            <button
              type="button"
              text="Entrar"
              onClick={ this.handleSubmit }
              className="btn btn-primary"
              disabled={ !this.enableButton() }
            >
              Entrar
            </button>
            { enable && <Redirect to="/carteira" /> }
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleEmail: (payload) => dispatch(getEmail(payload)),
});
// estava utilizando o dispatch de forma errada junto com o history.push

Login.propTypes = {
  handleEmail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);

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
      username: '',
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
    const { username } = this.state;
    const { handleEmail } = this.props;
    handleEmail(username);
    this.setState({ enable: true });
  }

  enableButton() {
    const { username, password } = this.state;
    const minPassword = 6;
    if (password.length >= minPassword) {
      const regex = /^[a-z0-9_.-]+@[a-z]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/;
      if (regex.test(username)) return true;
    }
    return false;
  }

  render() {
    const { username, password, enable } = this.state;
    return (
      <div className="container">
        <h2>Login</h2>
        <form name="form">
          <div className="form-group">
            <label htmlFor="username">
              Username
              <input
                data-testid="email-input"
                type="email"
                className="form-control"
                value={ username }
                onChange={ (e) => { this.handleChange(e); } }
              />
            </label>
          </div>
          <label htmlFor="password">
            Password
            <input
              data-testid="password-input"
              type="password"
              className="form-control"
              value={ password }
              onChange={ (e) => { this.handleChange(e); } }
            />
          </label>
          <div className="form-group">
            <button
              type="button"
              text="Entrar"
              onSubmit={ this.handleSubmit }
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

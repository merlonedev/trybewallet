import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setPersonalValue } from '../actions';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleSubmit() {
    const { history, dispatchSetValue } = this.props;
    dispatchSetValue(this.state);
    history.push('/carteira');
  }

  render() {
    const { username, password } = this.state;
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
                onChange={ this.handleChange }
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
              onChange={ this.handleChange }
            />
          </label>
          <div className="form-group">
            <button
              type="button"
              text="Entrar"
              onSubmit={ this.handleSubmit }
              className="btn btn-primary"
            >
              Entrar
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchSetValue: (valueAndName) => dispatch(setPersonalValue(valueAndName)),
}
);

const mapStateToProps = (state) => ({ user: state.reducer.user });

Login.propTypes = {
  dispatchSetValue: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

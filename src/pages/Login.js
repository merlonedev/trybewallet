import React from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import { addUser } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({ [name]: value });
  }

  handleClick(event) {
    event.preventDefault();
    const { add } = this.props;
    const { email, password } = this.state;
    const passwordMinLength = 6;
    const regExp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i;
    if (regExp.test(email) && password.length >= passwordMinLength) add(email);
  }

  render() {
    return (
      <form>
        <label htmlFor="email-input">
          Email:
          <input
            id="email-input"
            name="email"
            data-testid="email-input"
            type="email"
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="pass-input">
          Password:
          <input
            id="pass-input"
            name="password"
            data-testid="password-input"
            type="password"
            onChange={ this.handleChange }
          />
        </label>
        <button type="button" onClick={ this.handleClick }>Entrar</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  add: (user) => dispatch(addUser(user)),
});

Login.propTypes = {
  add: func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);

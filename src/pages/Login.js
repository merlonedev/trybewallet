import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ADD_USER from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
    const { addUser } = this.props;
    const { email, password } = this.state;
    addUser({ email, password });
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <div>
          <label htmlFor="email">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="E-mail"
              data-testid="email-input"
              value={ email }
              onChange={ this.handleChange }
              required
            />
          </label>
          <label htmlFor="password">
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              data-testid="password-input"
              value={ password }
              onChange={ this.handleChange }
              required
              minLength="6"
            />
          </label>
          <button
            type="button"
            onClick={ this.handleClick }
          >
            Entrar
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addUser: (value) => dispatch(ADD_USER(value)),
});

Login.propTypes = {
  addUser: PropTypes.string.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import ADD_USER from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      carteira: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
    const { addUser } = this.props;
    const { email, password } = this.state;
    addUser({ email, password });
    this.setState({ carteira: true });
    console.log('clicou');
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    }, () => {
      this.verify();
    });
  }

  verify() {
    const { email, password } = this.state;
    const passlength = 6;
    if (email.split('@').length === 2
      && email.includes('.com')
      && password.length >= passlength) {
      const button = document.querySelector('#buttonwallet');
      button.addEventListener('click', this.handleClick);
      button.disabled = false;
    }
  }

  render() {
    const { email, password, carteira } = this.state;
    if (carteira === true) {
      return <Redirect to="/carteira" />;
    }
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
            disabled
            id="buttonwallet"
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

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { saveEmail } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      user: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { user } = this.state;
    const { userEmail } = this.props;
    userEmail(user);
  }

  render() {
    const { user, password } = this.state;
    const { handleChange, handleClick } = this;
    const pass = 6;
    const valid = /(.*)@(.*).com/; // codigo do meu colega da turma 12 patrick
    return (
      <section className="login-input">
        <input
          name="user"
          onChange={ handleChange }
          value={ user }
          type="email"
          placeholder="Usuário"
          data-testid="email-input"
        />
        <input
          name="password"
          onChange={ handleChange }
          value={ password }
          type="password"
          placeholder="password"
          data-testid="password-input"
        />
        <Link to="/carteira">
          <button
            type="button"
            disabled={ (user.match(valid) === null) || password.length < pass }
            onClick={ handleClick }
          >
            Entrar
          </button>
        </Link>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  userEmail: (user) => dispatch(saveEmail(user)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

Login.propTypes = {
  userEmail: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

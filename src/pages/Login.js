import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      user: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { user, password } = this.state;
    const pass = 6;
    const valid = /(.*)@(.*).com/; // codigo do meu colega da turma 12 patrick
    return (
      <section className="login-input">
        <input
          name="user"
          onChange={ this.handleChange }
          value={ user }
          type="email"
          placeholder="Usuário"
          data-testid="email-input"
        />
        <input
          name="password"
          onChange={ this.handleChange }
          value={ password }
          type="password"
          placeholder="password"
          data-testid="password-input"
        />
        <Link to="/carteira">
          <button
            type="button"
            disabled={ (user.match(valid) === null) || password.length < pass }
          >
            Entrar
          </button>
        </Link>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  user: (user) => dispatch(addingUserEmail(user)),
});

export default connect(null, mapDispatchToProps)(Login);

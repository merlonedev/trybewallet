import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAwesomeAPI } from '../actions';
import Input from '../components/Input';
import Button from '../components/Button';
import Header from '../components/Header';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expense: 0,
      description: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.getCurrency = this.getCurrency.bind(this);
  }

  componentDidMount() {
    this.getCurrency();
  }

  async getCurrency() {
    const { props: { queryAPI } } = this;
    queryAPI();
  }

  handleChange({ target: { name, type, value, checked } }) {
    function newValue() {
      switch (type) {
      case 'checkbox': return checked;
      case 'number': return +value;
      default: return value;
      }
    }
    this.setState((state) => ({ ...state, [name]: newValue() }));
  }

  render() {
    const { state: { expense, description }, handleChange } = this;
    return (
      <section>
        <Header />
        <Input
          label="Valor"
          type="number"
          name="expense"
          value={ expense }
          onChange={ handleChange }
        />
        <Input
          label="Descrição"
          type="text"
          name="description"
          value={ description }
          onChange={ handleChange }
        />
        <Button />
      </section>
    );
  }
}
const { func } = PropTypes;

Wallet.propTypes = {
  queryAPI: func.isRequired,
};

const mapStateToProps = (state) => ({
  currency: state.Wallet,
});

const mapDispatchToProps = (dispatch) => ({
  queryAPI: () => dispatch(fetchAwesomeAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

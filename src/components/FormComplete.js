import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Select from './Select';
import fetchAPI from '../actions/fetchAPI';

class FormComplete extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      coin: 'USD',
      tag: 'Alimentação',
      money: 'Dinheiro',
      descricao: '',
      id: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleSubmit() {
    this.setState(({ id }) => ({
      id: id + 1,
      value: '',
      descricao: '',
      coin: 'USD',
      tag: 'Alimentação',
      money: 'Dinheiro',
    }));
  }

  render() {
    const { value, coin, tag, money, descricao } = this.state;
    return (
      <form>
        <Input
          value={ value }
          descricao={ descricao }
          handleChange={ this.handleChange }
        />
        <Select
          coin={ coin }
          money={ money }
          tag={ tag }
          handleChange={ this.handleChange }
        />
        <button
          type="button"
          onClick={ () => { this.handleSubmit(); } }
        >
          Adicionar Despesa
        </button>
      </form>
    );
  }
}

export default FormComplete;

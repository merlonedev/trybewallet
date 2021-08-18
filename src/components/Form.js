import React, { Component } from 'react';
import Inputs from './Inputs';
import Button from './Button';
import PaymentMethod from './PaymentMethod';
import Currencies from './Currencies';
import Tag from './Tag';

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      valor: 0,
      descricao: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState((state) => ({
      ...state,
      [name]: value,
    }));
  }

  render() {
    const { valor, descricao } = this.state;
    const inputValor = {
      htmlFor: 'input-valor',
      labelText: 'Valor',
      type: 'text',
      name: 'valor',
      id: 'input-valor',
      value: valor,
      onChange: this.handleChange,
    };

    const inputDescription = {
      htmlFor: 'input-description',
      labelText: 'Descrição',
      type: 'text',
      name: 'descricao',
      id: 'input-description',
      value: descricao,
      onChange: this.handleChange,
    };

    return (
      <form>
        <Inputs { ...inputValor } />
        <Inputs { ...inputDescription } />
        <PaymentMethod />
        <Currencies />
        <Tag />
        <Button />
      </form>

    );
  }
}

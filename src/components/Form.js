import React from 'react';
import Input from './Input';
import Select from './Select';
import { payMethodOptions, tag } from '../helpers/selectOptions';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleChange(e) {
    const input = e.target;

    this.setState({
      [input.id]: input.value,
    });
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        Form
        <Input id="valor-input" name="Valor" />
        <Input id="descr-input" name="Descrição" />
        <Select id="moeda-input" name="Moeda" />
        <Select
          id="paymethod-input"
          name="Método de pagamento"
          options={ payMethodOptions }
        />
        <Select
          id="tag-input"
          name="Tag"
          options={ tag }
        />
      </form>
    );
  }
}

export default Form;

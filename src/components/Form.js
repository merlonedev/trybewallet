import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Select from './Select';
import { payMethodOptions, tagList } from '../helpers/selectOptions';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      valor: 0,
      currency: 'BRL',
      payMethod: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
    const {
      props: { loading, currencies },
      state: { valor, currency, payMethod, tag, description },
    } = this;
    return (
      <div>
        { loading && <h3>Carregando...</h3> }
        <form onSubmit={ this.handleSubmit }>
          <Input id="valor" name="Valor" value={ valor } onChange={ this.handleChange } />
          <Select
            id="currency"
            name="Moeda"
            options={ currencies }
            value={ currency }
            onChange={ this.handleChange }
          />
          <Select
            id="payMethod"
            name="Método de pagamento"
            options={ payMethodOptions }
            value={ payMethod }
            onChange={ this.handleChange }
          />
          <Select
            id="tag"
            name="Tag"
            options={ tagList }
            value={ tag }
            onChange={ this.handleChange }
          />
          <Input
            id="description"
            name="Descrição"
            value={ description }
            onChange={ this.handleChange }
          />
        </form>
      </div>
    );
  }
}

const { bool, arrayOf, string } = PropTypes;
Form.propTypes = {
  loading: bool.isRequired,
  currencies: arrayOf(string),
};

Form.defaultProps = {
  currencies: 'BRL',
};

export default Form;

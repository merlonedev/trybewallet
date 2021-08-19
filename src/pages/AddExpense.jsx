import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Select from './Select';

class AddExpense extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currencyList: props.currencyArray,
      description: '',
      selectedCurrency: '',
      selectedPayment: '',
      selectedCategory: '',
      value: 0,
    };

    this.handleCategory = this.handleCategory.bind(this);
    this.handleCurrency = this.handleCurrency.bind(this);
    this.handlePayment = this.handlePayment.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleValue = this.handleValue.bind(this);
    this.categoryTag = this.categoryTag.bind(this);
    this.paymentMethod = this.paymentMethod.bind(this);
  }

  handleCurrency(event) {
    this.setState({ selectedCurrency: event.target.value });
  }

  handlePayment(event) {
    this.setState({ selectedPayment: event.target.value });
  }

  handleCategory(event) {
    this.setState({ selectedCategory: event.target.value });
  }

  handleDescription(event) {
    this.setState({ description: event.target.value });
  }

  handleValue(event) {
    this.setState({ value: event.target.value });
  }

  paymentMethod() {
    return [
      { value: 'cash', content: 'Dinheiro' },
      { value: 'credit', content: 'Cartão de crédito' },
      { value: 'debt', content: 'Cartão de débito' },
    ];
  }

  categoryTag() {
    return [
      { value: 'food', content: 'Alimentação' },
      { value: 'recreation', content: 'Lazer' },
      { value: 'work', content: 'Trabalho' },
      { value: 'transportation', content: 'Transporte' },
      { value: 'health', content: 'Saúde' },
    ];
  }

  render() {
    const { description, currencyList, selectedCurrency, selectedPayment,
      selectedCategory, value } = this.state;
    return (
      <form name="add-expenses">
        <label htmlFor="value-input">
          Valor:
          <input
            id="value-input"
            type="number"
            placeholder="Exemplo: 100"
            value={ value }
            onChange={ this.handleValue }
          />
        </label>
        <label htmlFor="description-input">
          Descrição:
          <input
            id="description-input"
            type="text"
            placeholder="Exemplo: McDonalds"
            value={ description }
            onChange={ this.handleDescription }
          />
        </label>
        <Select
          name="currency-select"
          labelText="Moeda:"
          selectedOption={ selectedCurrency }
          onSelectedChange={ this.handleCurrency }
          optionList={ currencyList }
        />
        <Select
          name="payment-select"
          labelText="Método de Pagamento:"
          selectedOption={ selectedPayment }
          onSelectedChange={ this.handlePayment }
          optionList={ this.paymentMethod() }
        />
        <Select
          name="category-select"
          labelText="Tag:"
          selectedOption={ selectedCategory }
          onSelectedChange={ this.handleCategory }
          optionList={ this.categoryTag() }
        />
      </form>
    );
  }
}

AddExpense.propTypes = {
  currencyArray: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default connect()(AddExpense);

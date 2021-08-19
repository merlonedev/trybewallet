import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAPI2 } from '../actions';
import Input from './Input';
import SelectList from './SelectList';
import Button from './Button';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      value: 0,
      currency: 'Selecione',
      method: 'Selecione',
      tag: 'Selecione',
      description: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  addExpense(newExpense) {
    const { expenses } = this.props;
    const expensesList = { ...expenses, newExpense };
    return expensesList;
  }

  handleSubmit(e) {
    e.preventDefault();
    const { state: { id }, props: { ratesDispatch } } = this;
    const { state } = this;

    ratesDispatch(state);

    this.setState({
      id: id + 1,
      value: 0,
      currency: '',
      method: '',
      tag: '',
      description: '',
    });
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
      state: { value, tag, description, method, currency },
    } = this;
    return (
      <div>
        { loading && <h3>Carregando...</h3> }
        <form onSubmit={ this.handleSubmit }>
          <Input id="value" name="Valor" value={ value } onChange={ this.handleChange } />
          <SelectList
            options={ currencies }
            value1={ currency }
            onChange1={ this.handleChange }
            value2={ method }
            onChange2={ this.handleChange }
            value3={ tag }
            onChange3={ this.handleChange }
          />
          <Input
            id="description"
            name="Descrição"
            value={ description }
            onChange={ this.handleChange }
          />
          <Button
            type="submit"
            disabled={ false }
            name="Adicionar despesa"
          />
        </form>
      </div>
    );
  }
}

const { bool, arrayOf, string, func, object, oneOfType } = PropTypes;
Form.propTypes = {
  loading: bool.isRequired,
  currencies: arrayOf(string),
  expenses: oneOfType([arrayOf(string), arrayOf(object)]),
  ratesDispatch: func.isRequired,
};

Form.defaultProps = {
  currencies: 'BRL',
  expenses: [],
};

const mapStateToProps = (state) => {
  const { expenses } = state.wallet;
  return {
    expenses,
  };
};

const mapDispatchToProps = (dispatch) => ({
  ratesDispatch: (expense) => dispatch(fetchAPI2(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);

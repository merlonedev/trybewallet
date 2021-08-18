import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Select from './Select';
import { payMethodOptions, tag } from '../helpers/selectOptions';

class Form extends React.Component {
  constructor(props) {
    super(props);

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
    const { props: { loading, currencies } } = this;
    return (
      <div>
        { loading && <h3>Carregando...</h3> }
        <form onSubmit={ this.handleSubmit }>
          Form
          <Input id="valor-input" name="Valor" />
          <Input id="descr-input" name="Descrição" />
          <Select
            id="moeda-input"
            name="Moeda"
            options={ currencies }
          />
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

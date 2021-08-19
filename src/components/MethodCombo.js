import React from 'react';
import PropTypes from 'prop-types';

const methods = ['Cartão de crédito', 'Cartão de débito', 'Dinheiro'];

class MethodCombo extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <section>
        <label htmlFor="method">
          Método de pagamento
          <select
            value={ value }
            name="method"
            id="method"
            onChange={ handleChange }
          >
            { methods.map((item, key) => <option key={ key }>{ item }</option>)}
          </select>

        </label>
      </section>
    );
  }
}

MethodCombo.propTypes = {
  arrayCurrency: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default MethodCombo;

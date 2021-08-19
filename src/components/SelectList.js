import React from 'react';
import PropTypes from 'prop-types';
import Select from './Select';

const payMethodOptions = [
  'Dinheiro',
  'Cartão de crédito',
  'Cartão de débito',
];

const tagList = [
  'Alimentação',
  'Lazer',
  'Trabalho',
  'Transporte',
  'Saúde',
];

class SelectList extends React.Component {
  render() {
    const {
      onChange1,
      options,
      value1,
      onChange2,
      value2,
      onChange3,
      value3,
    } = this.props;
    return (
      <>
        <Select
          id="currency"
          name="Moeda"
          options={ options }
          value={ value1 }
          onChange={ onChange1 }
        />
        <Select
          id="method"
          name="Método de pagamento"
          options={ payMethodOptions }
          value={ value2 }
          onChange={ onChange2 }
        />
        <Select
          id="tag"
          name="Tag"
          options={ tagList }
          value={ value3 }
          onChange={ onChange3 }
        />
      </>
    );
  }
}

const { string, func, object, arrayOf, oneOfType } = PropTypes;

SelectList.propTypes = {
  onChange1: func.isRequired,
  options: oneOfType([arrayOf(string), arrayOf(object)]),
  value1: string.isRequired,
  onChange2: func.isRequired,
  value2: string.isRequired,
  onChange3: func.isRequired,
  value3: string.isRequired,
};

SelectList.defaultProps = {
  options: [],
};

export default SelectList;

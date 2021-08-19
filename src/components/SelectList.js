import React from 'react';
import PropTypes from 'prop-types';
import Select from './Select';

const payMethodOptions = [
  'Dinheiro',
  'Cartão de Crédito',
  'Cartão de Débito',
];

class SelectList extends React.Component {
  render() {
    const {
      onChange1,
      options1,
      value1,
      onChange2,
      value2,
      onChange3,
      options3,
      value3,
    } = this.props;
    return (
      <>
        <Select
          id="currency"
          name="Moeda"
          options={ options1 }
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
          options={ options3 }
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
  options1: oneOfType([arrayOf(string), arrayOf(object)]),
  value1: string.isRequired,
  onChange2: func.isRequired,
  value2: string.isRequired,
  onChange3: func.isRequired,
  options3: oneOfType([arrayOf(string), arrayOf(object)]),
  value3: string.isRequired,
};

SelectList.defaultProps = {
  options1: [],
  options3: [],
};

export default SelectList;

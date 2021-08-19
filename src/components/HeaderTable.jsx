import React from 'react';

const headerColumns = ['Descrição', 'Tag', 'Método de pagamento', 'Valor', 'Moeda',
  'Câmbio utilizado', 'Valor convertido', 'Moeda de conversão', 'Editar/Excluir'];

class HeaderTable extends React.Component {
  render() {
    return (
      <thead>
        <tr>
          { headerColumns.map((item) => (<th key={ item }>{ item }</th>)) }
        </tr>
      </thead>
    );
  }
}

export default HeaderTable;

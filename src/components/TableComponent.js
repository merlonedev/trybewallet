import React, { Component } from 'react';
import HeadTable from './HeadTable';
import BodyTable from './BodyTable';

class TableComponent extends Component {
  render() {
    return (
      <section>
        <table>
          <HeadTable />
          <BodyTable />
        </table>

      </section>
    );
  }
}

export default TableComponent;

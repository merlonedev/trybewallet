import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import HeaderComponent from '../components/HeaderComponent';
import FormComponent from '../components/FormComponent';
// import TableComponent from '../components/TableComponent';
import HeadTable from '../components/HeadTable';
import BodyTable from '../components/BodyTable';

class Wallet extends React.Component {
  /* constructor() {
    super();
    this.requestEdition = this.requestEdition.bind(this);
    this.exitEditSection = this.exitEditSection.bind(this);

     this.state = {
      editing: false,
      editID: 0,
    };
  }
  */
  /* requestEdition(id) {
    this.setState({ editing: true, editID: id });
  }

  exitEditSection() {
    this.setState({ editing: false, editID: 0 });
  }
  */
  render() {
    // const { editing, editID } = this.state;
    return (
      <section>
        <HeaderComponent />
        <FormComponent />
        <section>
          <table>
            <HeadTable />
            <BodyTable />
          </table>
        </section>
      </section>
    );
  }
}
export default Wallet;

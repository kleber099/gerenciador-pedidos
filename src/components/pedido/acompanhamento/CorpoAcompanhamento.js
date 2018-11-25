import React, {Component} from 'react';
import { connect } from 'react-redux';

class CorpoAcompanhamento extends Component {

  constructor(props) {
    super(props);
  }

  _listRows() {
    const row = this.props.pedidos.map((row) => {
      return this._listValuesRow(row)
    });
    return row
  }

  _listValuesRow(row) {
    const a = <tr>
      <td> {row.nome} </td>
      <td> 90m</td>
      <td>{this._renderStatus(row.status)}</td>
    </tr>
    return a
  }

  _renderStatus(status) {
    switch (status) {
      case "NOVO":
        return <th><a class="btn-floating btn-medium waves-effect waves-light red"/></th>
      case "PREPARANDO":
        return <th><a class="btn-floating btn-medium waves-effect waves-light yellow"/></th>
      case "CONFERENCIA":
        return <th><a class="btn-floating btn-medium waves-effect waves-light green"/></th>
      case "PRONTO":
        return <th><a class="btn-floating btn-medium waves-effect waves-light blue"/></th>
      case "EXCLUIDO":
        return <th><a class="btn-floating btn-medium waves-effect waves-light blue-grey lighten-4"/></th>
      case "PAGO":
        return <th><a class="btn-floating btn-medium waves-effect waves-light blue-grey lighten-4"/></th>
    }
  }

  render() {
    return (
      <tbody>
      {this._listRows()}
      </tbody>
    );
  }
}

function mapStateProps(state) {
  return {
    pedidos: state.pedido.pedidos
  }
}

export default connect(mapStateProps) (CorpoAcompanhamento);
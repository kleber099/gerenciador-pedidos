import React, {Component} from 'react';
import {connect} from 'react-redux';

class CorpoCaixa extends Component {

  constructor(props) {
    super(props);
  }

  _listRows() {
    const row = this.props.pedidos.map((pedido) => {
      return this._listValuesRow(pedido)
    });
    return row
  }

  _listValuesRow(pedido) {
    const row = <tr>
      <td> {pedido.nome} </td>
      <td>{this._renderStatus(pedido.status)}</td>
      <td>
        <a class="waves-effect waves-light btn-large"> <i class="material-icons center">fast_forward</i></a>
      </td>
    </tr>
    return row
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

export default connect(mapStateProps) (CorpoCaixa);
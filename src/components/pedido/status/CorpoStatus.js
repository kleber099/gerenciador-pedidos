import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as statusType from '../statusType';
import {changeStatus, excluirPedido} from '../../../actions/pedidoActions';
import { bindActionCreators } from 'redux';

class CorpoStatus extends Component {

  constructor(props) {
    super(props);
  }

  _listRows() {
    const row = this.props.pedidos.map((pedido) => {
      if(pedido.visivel){
        return this._listValuesRow(pedido)
      }
    });
    return row
  }

  _listValuesRow(pedido) {
    const a = <tr>
      <td> {pedido.nome} </td>
      <td>{this._renderStatus(pedido.status)}</td>
      <td>
        <a class="waves-effect waves-light btn-large"> <i class="material-icons center">expand_less</i></a>
        <a class="waves-effect waves-light btn-large" onClick = {this._handleClick(pedido)}> <i class="material-icons center">fast_forward</i></a>
        <a class="waves-effect waves-light btn-large" onClick = {this._excludeClick(pedido)}> <i class="material-icons center">close</i></a>
      </td>
    </tr>
    return a
  }

  _handleClick = (pedido) => event => {
    event.preventDefault();
    this.props.changeStatus(pedido)
  }

  _excludeClick = (pedido) => event => {
    event.preventDefault();
    this.props.excluirPedido(pedido)
  }
  _renderStatus(status) {
    switch (status) {
      case statusType.NOVO:
        return <th><a class="btn-floating btn-medium waves-effect waves-light red"/></th>
      case statusType.PREPARANDO:
        return <th><a class="btn-floating btn-medium waves-effect waves-light yellow"/></th>
      case statusType.CONFERENCIA:
        return <th><a class="btn-floating btn-medium waves-effect waves-light green"/></th>
      case statusType.PRONTO:
        return <th><a class="btn-floating btn-medium waves-effect waves-light blue"/></th>
      case statusType.EXCLUIDO:
        return <th><a class="btn-floating btn-medium waves-effect waves-light blue-grey lighten-4"/></th>
      case statusType.PAGO:
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({changeStatus, excluirPedido}, dispatch)
}

export default connect(mapStateProps, mapDispatchToProps) (CorpoStatus);
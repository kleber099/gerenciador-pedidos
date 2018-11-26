import * as types from './actionTypes';
import * as statusType from '../components/pedido/statusType'
import axios from 'axios';
const URL = 'http://localhost:3004/pedidos';

export function criarPedido(pedido) {
  return { type: types.CRIAR_PEDIDO, pedido };
}

function fowardStatus(status) {
  switch(status){
    case(statusType.NOVO):
      return statusType.PREPARANDO
    case(statusType.PREPARANDO):
      return statusType.CONFERENCIA
    case(statusType.PRONTO):
      return statusType.PAGO
    default: 
     return status;
  }
}

export function changeStatus(pedido) {
  pedido.status = fowardStatus(pedido.status)
  return dispatch => {
    const newUrl = URL + `/${pedido.id}`
    axios.put(newUrl,pedido)
      .then(pedidos => {
          console.log(pedidos)
          dispatch(carregarPedidos());
    });
  };
}

export function carregarPedidos() {
  return dispatch => {
    axios.get(URL)
      .then(pedidos => {
        dispatch(carregarPedidosSucesso(pedidos.data));
      });
  };
}

export function carregarPedidosSucesso(pedidos) {
  return { type: types.CARREGAR_PEDIDOS, pedidos };
};
import * as types from './actionTypes';
import axios from 'axios';
const URL = 'http://localhost:3004/pedidos';

export function criarPedido(pedido) {
  return { type: types.CRIAR_PEDIDO, pedido };
}

function fowardStatus(status) {
  switch(status){
    case('NOVO'):
      return 'PREPARANDO'
    case('PREPARANDO'):
      return 'CONFERENCIA'
    case('PRONTO'):
      return 'PAGO'
    default: 
     return status;
  }
}

export function changeStatus(pedido) {
  console.log(pedido)
  pedido.status = fowardStatus(pedido.status)
  console.log(pedido)
  return {type: types.MUDAR_STATUS, pedido}
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
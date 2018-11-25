import * as types from './actionTypes';
import axios from 'axios';
const URL = 'http://localhost:3004/pedidos';

export function criarPedido(pedido) {
  return { type: types.CRIAR_PEDIDO, pedido };
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
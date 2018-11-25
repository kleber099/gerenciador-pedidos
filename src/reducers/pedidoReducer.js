import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
  pedido: {},
  pedidos: [],
};

export default function pedidoReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case actionTypes.CRIAR_PEDIDO:
      return { ...state, pedido: Object.assign({}, action.pedido) };
    case actionTypes.CARREGAR_PEDIDOS:
      return { ...state, pedidos: action.pedidos };
    default:
      return state;
  }
}
import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
  pedidos: [],
};

export default function pedidoReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case actionTypes.CARREGAR_PEDIDOS:
      return { ...state, pedidos: action.pedidos };
    default:
      return state;
  }
}
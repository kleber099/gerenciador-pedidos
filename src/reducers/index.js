import {combineReducers} from 'redux'
import pedido from './pedidoReducer'

const rootReducer = combineReducers({
  pedido
});

export default rootReducer;
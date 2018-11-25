import React, {Component} from 'react'
import Cabecalho from '../Cabecalho'
import CorpoAcompanhamento from './CorpoAcompanhamento'
import Legenda from '../Legenda'

class Acompanhamento extends Component {
  render() {
    const columns = ["Clientes", "Tempo de Espera", "Status"];
    return (
      <div className="container">
        <table>
          <Cabecalho columns={columns}/>
          <CorpoAcompanhamento/>
        </table>
        <Legenda/>
      </div>
    );
  }
}

export default Acompanhamento;
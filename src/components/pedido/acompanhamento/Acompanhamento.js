import React, {Component} from 'react'
import Cabecalho from '../Cabecalho'
import Corpo from '../Corpo'
import Legenda from '../Legenda'

class Acompanhamento extends Component {
  render() {
    const columns = ["Clientes", "Tempo de Espera", "Status"]
    const rows = [{"name": "Cliente1", "tempo": "10m", "status": "CONFERENCIA"},
      {"name": "Cliente2", "tempo": "90m", "status": "PREPARANDO"}]
    return (
      <div className="container">
        <table>
          <Cabecalho columns={columns}/>
          <Corpo rows={rows}/>
        </table>
        <Legenda/>
      </div>
    );
  }
}

export default Acompanhamento;
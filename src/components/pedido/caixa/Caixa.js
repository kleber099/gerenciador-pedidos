import React, {Component} from 'react'
import Legenda from '../Legenda'
import Cabecalho from '../Cabecalho'
import Corpo from '../Corpo'

class Caixa extends Component {
  render() {
    const columns = ["Clientes", "Status", "Finalizar"]
    const rows = [{"name" : "Cliente1", "status": "CONFERENCIA", "actions": {"act1": "GO"}}, 
                  {"name": "Cliente2", "status" : "PREPARANDO", "actions": {"act1": "GO"}}]
    return (
      <div className="container">
        <table>
          <Cabecalho columns={columns} />
          <Corpo rows={rows}/>
        </table>
        <Legenda/>
      </div>
    );
  }
}

export default Caixa;
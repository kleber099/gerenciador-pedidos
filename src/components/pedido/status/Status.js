import React, {Component} from 'react'
import Legenda from '../Legenda.js'
import Cabecalho from '../Cabecalho'
import CorpoStatus from './CorpoStatus.js'

class Status extends Component {
  render() {
    const columns = ["Clientes", "Status", "Ações"]
    const rows = [{
      "name": "Cliente1",
      "status": "CONFERENCIA",
      "actions": {"act1": "MORE", "act2": "GO", "act3": "CANCEL"}
    },
      {"name": "Cliente2", "status": "PREPARANDO", "actions": {"act1": "MORE", "act2": "GO", "act3": "CANCEL"}}]

    return (
      <div className="container ">
        <table>
          <Cabecalho columns={columns}/>
          <CorpoStatus rows={rows}/>
        </table>
        <Legenda/>
      </div>
    );
  }
}

export default Status;
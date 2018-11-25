import React, {Component} from 'react'
import Legenda from '../Legenda.js'
import Cabecalho from '../Cabecalho'
import CorpoStatus from './CorpoStatus.js'

class Status extends Component {
  render() {
    const columns = ["Clientes", "Status", "Ações"];

    return (
      <div className="container ">
        <table>
          <Cabecalho columns={columns}/>
          <CorpoStatus/>
        </table>
        <Legenda/>
      </div>
    );
  }
}

export default Status;
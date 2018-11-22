import React, {Component} from 'react'
import Legenda from '../Legenda'
import Cabecalho from '../Cabecalho'
import CorpoCaixa from './CorpoCaixa'

class Caixa extends Component {

  constructor(props) {
    super(props);
    this.state = {
      columns:[],
      rows:[]
    }
  }

  render() {
    const columns = ["Clientes", "Status", "Finalizar"]
    const rows = [{"name" : "Cliente1", "status": "CONFERENCIA", "actions": {"act1": "GO"}}, 
                  {"name": "Cliente2", "status" : "PREPARANDO", "actions": {"act1": "GO"}}]
    return (
      <div className="container">
        <table>
          <Cabecalho columns={columns} />
          <CorpoCaixa rows={rows}/>
        </table>
        <Legenda/>
      </div>
    );
  }
}

export default Caixa;
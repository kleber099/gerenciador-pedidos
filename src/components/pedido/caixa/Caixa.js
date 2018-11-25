import React, {Component} from 'react'
import Legenda from '../Legenda'
import Cabecalho from '../Cabecalho'
import CorpoCaixa from './CorpoCaixa'

class Caixa extends Component {

  render() {
    const columns = ["Clientes", "Status", "Finalizar"];

    return (
      <div className="container">
        <table>
          <Cabecalho columns={columns}/>
          <CorpoCaixa/>
        </table>
        <Legenda/>
      </div>
    );
  }
}

export default Caixa;
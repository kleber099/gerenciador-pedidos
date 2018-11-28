import React, {Component} from 'react';
import {connect} from 'react-redux';
import {criarPedido} from '../../../actions/pedidoActions';
import { bindActionCreators } from 'redux';
import * as statusType from "../statusType";

const INITIAL_STATE = {
  nome: '',
  cpf: '',
  descricao: '',
};

class Cadastro extends Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let pedido = {...this.state};
    pedido.visivel = true;
    pedido.status = statusType.NOVO;
    pedido.tempo = '10m';

    this.props.criarPedido(pedido);
    this.setState({...this.state, ...INITIAL_STATE});
    this.props.history.push('/');
  };

  render() {
    const {nome, cpf, descricao} = this.state;
    return (
      <div className='row'>
        <h2>Cadastro de Pedidos</h2>
        <form className="col s12" onSubmit={this.handleSubmit}>
          <div className="input-field col s6">
            <input placeholder="Nome" name="nome" value={nome} onChange={this.handleChange}/><br/>
            <input placeholder="CPF" name="cpf" value={cpf} onChange={this.handleChange}/><br/>
            <textarea className="ta15em" name="descricao" placeholder="Descrição" value={descricao} onChange={this.handleChange}/>
            <button className="waves-effect waves-light btn z-depth-1">Registrar</button>
          </div>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({criarPedido}, dispatch)
}

export default connect(null, mapDispatchToProps) (Cadastro);
import React, {Component} from 'react'

class CadastroForm extends Component {
   render() {
        return (
            <div className="row">
                <h2 Cadastro de Pedidos/>
                <div class="divider"></div>
                <form className="col s12">
                    <div className="input-field col s6">
                        <input placeholder="Nome"/><br/>
                        <input placeholder="CPF"/><br/>
                        <textarea className="ta15em" placeholder="Descrição"/>
                    <button className="waves-effect waves-light btn z-depth-1">Registrar</button>
                    </div>
                 </form>
            </div>
        );
   }
}

export default CadastroForm;
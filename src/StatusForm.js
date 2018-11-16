import React, {Component} from 'react'

class StatusForm extends Component {
    render(){
        return(
            <div className="container ">
                <div className="row">
                    <div className="col s12">
                        <h4>Gerenciar Pedido</h4>
                    </div>
                    <div className="col s4 ">
                        <h5>Clientes</h5>
                        <p>Cliente1</p>
                        <div className="divider"/>
                        <p>Cliente2</p>
                        <div className="divider"/>
                        <p>Cliente3</p>
                        <div className="divider"/>
                    </div>
                    <div className="col s2 center">
                       <h5>Status</h5>
                       <div className="row">
                            <a class="btn-floating btn-small waves-effect waves-light red"></a>
                       </div>
                       <div className="row">
                            <a class="btn-floating btn-small waves-effect waves-light red"></a>
                       </div>
                       <div className="row">
                            <a class="btn-floating btn-small waves-effect waves-light red"></a>
                       </div>
                    </div>
                    <div className="col s6 right">
                        <h5>Ações</h5>
                        <div className="row">
                            <a class="waves-effect waves-light btn-small">
                                    <i class="material-icons center">expand_less</i>
                            </a>
                            <a class="waves-effect waves-light btn-small">
                                    <i class="material-icons center">fast_forward</i>
                            </a>
                            <a class="waves-effect waves-light btn-small">
                                <i class="material-icons center">close</i>
                            </a>
                        </div>
                         <div className="row">
                            <a class="waves-effect waves-light btn-small">
                                    <i class="material-icons center">expand_less</i>
                            </a>
                            <a class="waves-effect waves-light btn-small">
                                    <i class="material-icons center">fast_forward</i>
                            </a>
                            <a class="waves-effect waves-light btn-small">
                                <i class="material-icons center">close</i>
                            </a>
                        </div>
                        <div className="row">
                            <a class="waves-effect waves-light btn-small">
                                    <i class="material-icons center">expand_less</i>
                            </a>
                            <a class="waves-effect waves-light btn-small">
                                    <i class="material-icons center">fast_forward</i>
                            </a>
                            <a class="waves-effect waves-light btn-small">
                                <i class="material-icons center">close</i>
                            </a>
                        </div>
                    </div>
                </div>
                <p>Atenção Dirija-se ao caixa quando seu pedido estiver azul.</p>

                <div className="col s3">
                <div className="row">
                     <a class="btn-floating btn-small waves-effect waves-light red"/>
                     <span>Pedido Novo</span>
                </div>
                <div className="row">
                     <a class="btn-floating btn-small waves-effect waves-light yellow"/>
                     <span> Pedido Sendo Preparado</span>
                </div>

                 <div className="row">
                     <a class="btn-floating btn-small waves-effect waves-light green"/>
                     <span>Pedido Em Conferência</span>
                </div>
                <div className="row">
                     <a class="btn-floating btn-small waves-effect waves-light blue"/>
                     <span>Ponto para o pagamento</span>
                </div>


                </div>

            </div>
            

        );
    }
}

export default StatusForm;
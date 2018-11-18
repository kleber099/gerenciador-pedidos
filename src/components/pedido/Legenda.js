import React from 'react'

const Legenda = (props) => (
    <div>
        <div className="col s6 grey-text">
            <p>Atenção Dirija-se ao caixa quando seu pedido estiver azul.</p>
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
)
  
export default Legenda;
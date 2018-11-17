import React from 'react'
import { Link } from 'react-router-dom'

export default (props) => (
  <nav>
    <div className="nav-wrapper teal lighten-1">
      <a href="#" class="brand-logo">Gerenciador de Pedidos</a>
      <ul className="right">
        <li><Link to={'/'}>Status</Link></li>
        <li><Link to={'/cadastro'}>Cadastro</Link></li>
        <li><Link to={'/acompanhamento'}>Acompanhamento</Link></li>
        <li><Link to={'/caixa'}>Caixa</Link></li>
      </ul>
    </div>
  </nav>
)
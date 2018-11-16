import React, { Component } from 'react';
import './App.css';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css'

import Topo from './Topo'
import CadastroForm from './CadastroForm'
import Rodape from './Rodape'
import StatusForm from './StatusForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Topo/>
        <StatusForm/>
        <Rodape/>
      </div>
    );
  }
}

export default App;

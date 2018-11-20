import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css'
import './App.css';

import Topo from './shared/Topo';
import Rodape from './shared/Rodape';
import Cadastro from './pedido/cadastro/Cadastro';
import Acompanhamento from './pedido/acompanhamento/Acompanhamento';
import Status from './pedido/status/Status';
import Caixa from './pedido/caixa/Caixa';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Fragment>
            <Topo/>
            <Switch>
              <Route exact path='/' component={Status}/>
              <Route exact path='/cadastro' component={Cadastro}/>
              <Route exact path='/acompanhamento' component={Acompanhamento}/>
              <Route exact path='/caixa' component={Caixa}/>
            </Switch>
            <Rodape/>
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;

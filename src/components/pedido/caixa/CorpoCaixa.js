import React, {Component} from 'react';
import axios from 'axios';

class CorpoCaixa extends Component {

constructor(props) {
  super(props);
}

componentDidMount() {
  axios.get('http://localhost:3004/pedidos')
    .then(resp => {
    console.log(resp.data);
  });
}

_listRows() {
  const row = this.props.rows.map((row) => {
    return this._listValuesRow(row)
  });
  return row
}

_listValuesRow(row) {
 const a = <tr>
     <td> {row.name} </td>
     <td>{this._renderStatus(row.status)}</td>
     <td> 
       <a class="waves-effect waves-light btn-large"> <i class="material-icons center">fast_forward</i></a>
     </td>
 </tr>
 return a
}

_renderStatus(status) {
    switch (status) {
      case "NOVO":
        return <th><a class="btn-floating btn-medium waves-effect waves-light red"/></th>
      case "PREPARANDO":
        return <th><a class="btn-floating btn-medium waves-effect waves-light yellow"/></th>
      case "CONFERENCIA":
        return <th><a class="btn-floating btn-medium waves-effect waves-light green"/></th>
      case "PRONTO":
        return <th><a class="btn-floating btn-medium waves-effect waves-light blue"/></th>
      case "EXCLUIDO":
        return <th><a class="btn-floating btn-medium waves-effect waves-light blue-grey lighten-4"/></th>
      case "PAGO":
        return <th><a class="btn-floating btn-medium waves-effect waves-light blue-grey lighten-4"/></th>
    }
  }

render() {
  return (
    <tbody>
      {this._listRows()}
    </tbody>
  );
}

}

export default CorpoCaixa;
import React, {Component} from 'react';
import axios from 'axios';
class Corpo extends Component {

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
      return <tr>
        {this._listValuesRow(row)}
      </tr>
    });
    return row
  }

  _listValuesRow(dict) {
    const rowValues = Object.keys(dict).map((key) => {
      switch (key) {
        case "status":
          return this._renderStatus(dict[key])
        case "actions":
          const actionValues = Object.keys(dict[key]).map((key1) =>
            <a class="waves-effect waves-light btn-large">
              {this._renderActions(dict[key][key1])}
            </a>
          );
          return actionValues
        default:
          return <th>{dict[key]}</th>
      }
    })
    return rowValues
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

  _renderActions(action) {
    switch (action) {
      case "GO":
        return <i class="material-icons center">fast_forward</i>
      case "MORE":
        return <i class="material-icons center">expand_less</i>
      case "CANCEL":
        return <i class="material-icons center">close</i>
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

export default Corpo;

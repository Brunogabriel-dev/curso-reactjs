import { Component } from "react";

export default class Contador extends Component{

  state = {
    numero: this.props.valorInicial ?? 0
  }

  render() {
    return (
      <div>
        <h1>Contador (usando Classe)</h1>
        <h2>{this.props.valorInicial}</h2>
        <h2>{this.state.numero}</h2>
      </div>
    )
  }
}
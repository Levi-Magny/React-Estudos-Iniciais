import { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas";
import "./assets/App.css"
import './assets/index.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      notas: []
    }
  }

  criarNota(titulo, texto, cor){
    const novaNota = {titulo, texto, cor};
    const novoArrayNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas: novoArrayNotas
    }
    this.setState(novoEstado);
  }

  deletarNota(index){
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index, 1)
    this.setState({notas: arrayNotas});
  }

  render(){
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        <ListaDeNotas
        notas={this.state.notas}
        apagarNota={this.deletarNota.bind(this)}
        />
      </section>
    );
  }
}

export default App;

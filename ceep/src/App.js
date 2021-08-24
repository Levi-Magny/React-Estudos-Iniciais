import { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas";
import ListaDeCategorias from "./components/ListaDeCategorias";
import "./assets/App.css"
import './assets/index.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      notas: [],
      categorias: ["Música", "Faculdade"]
    }
  }

  criarNota(titulo, texto, cor, categoria){
    const novaNota = {titulo, texto, cor, categoria};
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

  criarCategoria(label){
    const novoArrayCategorias = [...this.state.categorias, label];
    const novoEstado = {categorias: novoArrayCategorias};
    this.setState(novoEstado);
  }

  render(){
    return (
      <section className="conteudo">
        <FormularioCadastro categorias={this.state.categorias} criarNota={this.criarNota.bind(this)}/>
        <main className="conteudo-principal">
          <ListaDeCategorias
          categorias={this.state.categorias}
          criarCategoria={this.criarCategoria.bind(this)}
          />
          <ListaDeNotas
          notas={this.state.notas}
          apagarNota={this.deletarNota.bind(this)}
          />
        </main>
      </section>
    );
  }
}

export default App;

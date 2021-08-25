import { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas";
import ListaDeCategorias from "./components/ListaDeCategorias";
import "./assets/App.css"
import './assets/index.css';
import Categorias from "./dados/Categorias";
import ArrayDeNotas from "./dados/ArrayDeNotas";

class App extends Component {
  constructor(){
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
  }

  /*criarNota(titulo, texto, cor, categoria){
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
  }*/

  render(){
    return (
      <section className="conteudo">
        <FormularioCadastro categorias={this.categorias.categorias} criarNota={this.notas.criarNota}/>
        <main className="conteudo-principal">
          <ListaDeCategorias
          categorias={this.categorias.categorias}
          criarCategoria={this.categorias.criarCategoria}
          />
          <ListaDeNotas
          notas={this.notas.notas}
          apagarNota={this.notas.deletarNota}
          />
        </main>
      </section>
    );
  }
}

export default App;

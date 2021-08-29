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
    this.Categorias = new Categorias();
    this.notas = new ArrayDeNotas();
  }

  render(){
    return (
      <section className="conteudo">
        <FormularioCadastro categorias={this.Categorias} criarNota={this.notas.criarNota.bind(this.notas)}/>
        <main className="conteudo-principal">
          <ListaDeCategorias
          categorias={this.Categorias}
          criarCategoria={this.Categorias.criarCategoria.bind(this.Categorias)}
          />
          <ListaDeNotas
          notas={this.notas}
          apagarNota={this.notas.deletarNota.bind(this.notas)}
          />
        </main>
      </section>
    );
  }
}

export default App;

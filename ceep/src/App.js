import { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas";
import "./assets/App.css"
import './assets/index.css';

class App extends Component {
  render(){
    return (
      <section className="conteudo">
        <FormularioCadastro/>
        <ListaDeNotas/>
      </section>
    );
  }
}

export default App;

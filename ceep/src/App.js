import { ListaDeNotas } from "./components/ListaDeNotas";
function App() {
  return (
    <section>
      <form>
        <input placeholder="Titulo" type="text"/>
        <textarea placeholder="Insira o seu texto..."></textarea>
      </form>
      <ListaDeNotas/>
    </section>
  );
}

export default App;

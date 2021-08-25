export default class Categorias {
    constructor(){
        this.categorias = [];
    }

    criarCategoria(nome){
        this.categorias.push(nome);
    }
}
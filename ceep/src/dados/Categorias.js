export default class Categorias {
    constructor(){
        this.categorias = [];
        this._inscritos = []; // utilizando o padrão Observable
    }

    /**
     * Este método inscreve elementos que serão notificados sobre qualquer mudança no objeto
     * @param {function} func função que será utilizada para notificação
     */
    inscrever(func){
        this._inscritos.push(func);
    }

    desinscrever(func){
        this._inscritos = this._inscritos.filter(f => f !== func);
    }

    /**
     * Utiliza o array de inscritos para notificá-los sobre uma mudança.
     */
    notificar(){
        this._inscritos.forEach(func => {
            func(this.categorias);
        })
    }

    /**
     * adiciona uma nova categoria ao app.
     * @param {String} nome nome da categoria
     */
    criarCategoria(nome){
        this.categorias.push(nome);
        this.notificar();
    }
}
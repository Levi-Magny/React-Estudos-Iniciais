export default class ArrayDeNotas {
    constructor(){
        this.notas = [];
        this._inscritos = [];
    }

    /**
     * Este método inscreve elementos que serão notificados sobre qualquer mudança no objeto
     * @param {function} func função que será utilizada para notificação
     */
    inscrever(func){
        this._inscritos.push(func);
    }
    /**
     * @param {function} func função que era utilizada na notificação
     *
     */
    desinscrever(func){
        this._inscritos = this._inscritos.filter(f => f !== func);
    }

    /**
     * Utiliza o array de inscritos para notificá-los sobre uma mudança.
     */
    notificar(){
        this._inscritos.forEach(func => {
            func(this.notas);
        })
    }

    /**
     * Cria uma nova nota no app.
     * @param {String} titulo Título da nota (tema central).
     * @param {String} texto Conteúdo da nota.
     * @param {String} cor Cor utilizada no card.
     * @param {String} categoria Tipo/catedoria da nota.
     */
    criarNota(titulo, texto, cor, categoria){
        const novaNota = new Nota(titulo, texto, cor, categoria);
        this.notas.push(novaNota);
        this.notificar();
    }
    
    deletarNota(indice){
        this.notas.splice(indice, 1);
        this.notificar();
    }
}

class Nota{
    constructor(titulo, texto, cor, categoria){
        this.titulo = titulo;
        this.texto = texto;
        this.cor = cor;
        this.categoria = categoria;
    }
}
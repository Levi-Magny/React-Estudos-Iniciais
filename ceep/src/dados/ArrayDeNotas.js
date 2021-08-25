export default class ArrayDeNotas {
    constructor(){
        this.notas = [];
    }

    criarNota(titulo, texto, cor, categoria){
        const novaNota = new Nota(titulo, texto, cor, categoria);
        this.notas.push(novaNota);
    }
    
    deletarNota(indice){
        this.notas.splice(indice, 1);
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
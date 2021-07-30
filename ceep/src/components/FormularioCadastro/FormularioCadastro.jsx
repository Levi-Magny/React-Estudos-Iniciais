import React, { Component } from "react";
import "./estilo.css";

class FormularioCadastro extends Component {

    constructor(props){
        super(props);
        this._titulo = "";
        this._texto = "";
    }

    get texto(){
        return this._texto;
    }

    set texto(value){
        this._texto = value;
    }

    get titulo(){
        return this._titulo;
    }

    set titulo(value){
        this._titulo = value;
    }

    handleMudancaTitulo(evento){
        this.titulo = evento.target.value;
    }

    handleMudancaTexto(evento){
        this.texto = evento.target.value;
    }

    criarNota(evento){
        evento.preventDefault();
        evento.stopPropagation();
        this.props.criarNota(this.titulo, this.texto);
    }

    render(){
        return(
            <form className="form-cadastro"
                onSubmit={this.criarNota.bind(this)}
            >
                <input
                    placeholder="Titulo"
                    type="text"
                    className="form-cadastro_input"
                    /* O .bind() passa qual a instância que o método deve estar 
                     (para usar o 'this' corretamente!). */
                    onChange={this.handleMudancaTitulo.bind(this)}
                />
                <textarea
                    rows={15}
                    placeholder="Insira o seu texto..."
                    className="form-cadastro_input"
                    onChange={this.handleMudancaTexto.bind(this)}
                />
                <button className="form-cadastro_input form-cadastro_submit">
                    Criar nota!
                </button>
            </form>
        );
    }
}

export default FormularioCadastro;
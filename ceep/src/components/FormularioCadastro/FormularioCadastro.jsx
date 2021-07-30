import React, { Component } from "react";
import "./estilo.css";

class FormularioCadastro extends Component {

    constructor(){
        super();
        this._titulo = "";
    }

    get titulo(){
        return this._titulo;
    }

    set titulo(value){
        this._titulo = value;
    }

    handleMudancaTitulo(evento){
        this.titulo = evento.target.value;
        console.log(this.titulo);
    }

    render(){
        return(
            <form className="form-cadastro">
                <input
                    placeholder="Titulo"
                    type="text"
                    className="form-cadastro_input"
                    onChange={this.handleMudancaTitulo}
                />
                <textarea
                    rows={15}
                    placeholder="Insira o seu texto..."
                    className="form-cadastro_input"
                />
                <button className="form-cadastro_input form-cadastro_submit">
                    Criar nota!
                </button>
            </form>
        );
    }
}

export default FormularioCadastro;
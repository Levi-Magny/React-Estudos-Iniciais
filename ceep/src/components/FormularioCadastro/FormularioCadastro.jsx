import React, { Component } from "react";
import "./estilo.css";

class FormularioCadastro extends Component {
    render(){
        return(
            <form className="form-cadastro">
                <input
                    placeholder="Titulo"
                    type="text"
                    className="form-cadastro_input"
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
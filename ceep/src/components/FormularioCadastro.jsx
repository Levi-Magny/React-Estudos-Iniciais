import React, { Component } from "react";

class FormularioCadastro extends Component {
    render(){
        return(
            <form>
                <input placeholder="Titulo" type="text"/>
                <textarea placeholder="Insira o seu texto..."></textarea>
                <button>Criar nota!</button>
            </form>
        );
    }
}

export default FormularioCadastro;
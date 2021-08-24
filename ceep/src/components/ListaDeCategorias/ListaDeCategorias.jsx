import React, { Component } from  'react';
import "./estilo.css";

class ListaDeCategorias extends Component {
    _handleEventInput(e){
        if(e.key === "Enter"){
            console.log("Criar Categoria");
            this.props.criarCategoria(e.target.value);
            e.target.value = "";
        }
    }
    render() {
        return (
            <div className="categorias">
                <ul className="lista-categoria">
                    {this.props.categorias.map((categoria, index) => {
                        return <li className="categorias_item" key={index}>{categoria}</li>;
                    })}
                </ul>
                <input
                type="text"
                className="lista-categorias_input"
                placeholder="Nova categoria"
                onKeyUp={this._handleEventInput.bind(this)}
                />
            </div>
        );
    }
}

export default ListaDeCategorias;
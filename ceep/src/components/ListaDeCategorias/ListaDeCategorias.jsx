import React, { Component } from  'react';
import "./estilo.css";

class ListaDeCategorias extends Component {
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
                />
            </div>
        );
    }
}

export default ListaDeCategorias;
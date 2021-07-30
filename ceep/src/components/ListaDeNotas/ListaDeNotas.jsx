import React, { Component } from "react";
import CardNota from "../CardNota";
import "./estilo.css";

class ListaDeNotas extends Component {
    render() {
        return (
            <ul className="lista-notas">
                {this.props.notas.map((categoria, index) => {
                    return (
                        <li className="lista-notas_item" key={index}>
                            <div>{categoria}</div>
                            <CardNota />
                        </li>
                    );
                })}
            </ul>
        );
    }
}
export default ListaDeNotas;
import React, { Component } from "react";

export class ListaDeNotas extends Component {
    render(){
        return (
        <ul>
            <li>
                <div>
                    <header>
                        <h3>Título</h3>
                    </header>
                    <p>Sua nota está aqui;</p>
                </div>
            </li>
        </ul>
        );
    }
}
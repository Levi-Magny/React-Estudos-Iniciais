import React, { Component } from 'react';
import "./estilo.css";

class CardNota extends Component {
    state = {  }
    render() { 
        return (
            <div className="card-nota">
                <header className="card-nota_cabecalho">
                    <h3 className="card-nota_titulo">Título</h3>
                </header>
                <p className="car-nota_texto">Sua nota está aqui;</p>
            </div>
        );
    }
}
 
export default CardNota;
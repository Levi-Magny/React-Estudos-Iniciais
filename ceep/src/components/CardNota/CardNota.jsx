import React, { Component } from 'react';
import "./estilo.css";
import { Box } from "../../styles";

class CardNota extends Component {
    render() { 
        return (
            <Box color={this.props.cor}>
                <header className="card-nota_cabecalho">
                    <h3 className="card-nota_titulo">{this.props.titulo}</h3>
                </header>
                <p className="car-nota_texto">{this.props.texto}</p>
            </Box>
        );
    }
}
 
export default CardNota;
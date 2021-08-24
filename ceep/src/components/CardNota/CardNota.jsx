import React, { Component } from 'react';
import "./estilo.css";
import { Box } from "../../styles";
import {ReactComponent as DeleteSVG} from "../../assets/img/delete.svg";

class CardNota extends Component {
    apagar(){
        this.props.apagarNota(this.props.indice);
    }

    render() { 
        return (
            <Box color={this.props.cor}>
                <header className="card-nota_cabecalho">
                    <h3 className="card-nota_titulo">{this.props.titulo}</h3>
                    <DeleteSVG onClick={this.apagar.bind(this)}/>
                    <h4>{this.props.categoria}</h4>
                    <hr/>
                </header>
                <p className="car-nota_texto">{this.props.texto}</p>
            </Box>
        );
    }
}
 
export default CardNota;
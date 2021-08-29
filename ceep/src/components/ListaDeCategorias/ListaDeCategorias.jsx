import React, { Component } from  'react';
import "./estilo.css";

class ListaDeCategorias extends Component {
    constructor(props){
        super(props);
        this.state = {
            categorias:[]
        }
        this._novasCategorias = this._novasCategorias.bind(this);
    }

    componentDidMount(){
        this.props.categorias.inscrever(this._novasCategorias);
    }

    componentWillUnmount(){
        this.props.categorias.desinscrever(this._novasCategorias);
    }

    _novasCategorias(categorias){
        this.setState({...this.state, categorias});
    }
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
                    {this.state.categorias.map((categoria, index) => {
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
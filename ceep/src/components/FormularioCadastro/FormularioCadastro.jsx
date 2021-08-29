import React, { Component } from "react";
import { Radio } from "../../styles";
import "./estilo.css";

class FormularioCadastro extends Component {

    constructor(props){
        super(props);
        this._titulo = "";
        this._texto = "";
        this.cor = "#e9e9e9";
        this.categoria = "";
        this.state = {
            categorias: []
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

    get texto(){
        return this._texto;
    }

    set texto(value){
        this._texto = value;
    }

    get titulo(){
        return this._titulo;
    }

    set titulo(value){
        this._titulo = value;
    }

    handleMudancaTitulo(evento){
        this.titulo = evento.target.value;
    }

    handleMudancaTexto(evento){
        this.texto = evento.target.value;
    }

    handleMudancaCor(evento){
        this.cor = evento.target.value;
    }

    handleMudancaCategoria(evento){
        this.categoria = evento.target.value;
    }

    criarNota(evento){
        evento.preventDefault();
        evento.stopPropagation();
        this.props.criarNota(this.titulo, this.texto, this.cor, this.categoria);
    }

    render(){
        return(
            <form className="form-cadastro"
                onSubmit={this.criarNota.bind(this)}
            >
                <select className="form-cadastro_input" onChange={this.handleMudancaCategoria.bind(this)}>
                    <option>Sem Categoria</option>
                    {this.state.categorias.map((categoria, index) => {
                        return(
                            <option key={index}>{categoria}</option>
                        )
                    })}
                </select>
                <input
                    placeholder="Titulo"
                    type="text"
                    className="form-cadastro_input"
                    /* O .bind() passa qual a instância que o método deve estar 
                     (para usar o 'this' corretamente!). */
                    onChange={this.handleMudancaTitulo.bind(this)}
                />
                <textarea
                    rows={15}
                    placeholder="Insira o seu texto..."
                    className="form-cadastro_input"
                    onChange={this.handleMudancaTexto.bind(this)}
                />
                <Radio
                    groupBy="cor"
                    label="Cinza"
                    value="#e9e9e9"
                    color={this.handleMudancaCor.bind(this)}
                    checked={true}
                />
                <Radio
                    groupBy="cor"
                    label="Amarelo"
                    value="#f5f5dc"
                    color={this.handleMudancaCor.bind(this)}
                />
                <Radio
                    groupBy="cor"
                    label="Vermelho"
                    value="#ff6961"
                    color={this.handleMudancaCor.bind(this)}
                />
                <button className="form-cadastro_input form-cadastro_submit">
                    Criar nota!
                </button>
            </form>
        );
    }
}

export default FormularioCadastro;
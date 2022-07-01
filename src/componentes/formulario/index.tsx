import React from "react";
import Botao from "../Botao";
import style from './formulario.module.scss';

class Formulario extends React.Component{
    state = {
        tarefa: "",
        tempo: "00:00"
    }
    
    adicionarTarefa(evento: React.FormEvent){
        evento.preventDefault();       
    }

    render(){
        return(
           <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
            <div className={style.inputContainer}>
            <label htmlFor="tarefa">
                <input 
                type="text"
                name="tarefa"
                value={this.state.tarefa}
                onChange={evento => this.setState({...this.state, tarefa: evento.target.value})}
                id="tarefa"
                placeholder="O que você deseja estudar"
                required
                />
            </label>
            </div>

            <div className={style.inputContainer}>
            <label htmlFor="tempo">
                <input 
                type="time"
                step="1"
                name="tempo"
                value={this.state.tempo}
                onChange={evento => this.setState({...this.state, tempo: evento.target.value})}
                id="tempo"
                min="00:00:00"
                max="01:30:00"
                required
                />
            </label>

            </div>
            <Botao>
                Adicionar
            </Botao>         
                         
           </form> 
        )
    }

}

export default Formulario;
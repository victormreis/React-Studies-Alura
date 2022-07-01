import React from "react";
import Botao from "../botao";
import './style.scss'

class Formulario extends React.Component{
    render(){
        return(
           <form className="novaTarefa">
            <div className="inputContainer">
            <label htmlFor="">
                <input 
                type="text"
                name="tarefa"
                id="tarefa"
                placeholder="O que você deseja estudar"
                required
                />
            </label>
            </div>

            <div className="inputContainer">
            <label htmlFor="tempo">
                <input 
                type="time"
                step="1"
                name="tempo"
                id="tempo"
                min="00:00:00"
                max="01:30:00"
                required
                />
            </label>

            </div>
            <Botao />
           </form> 
        )
    }

}

export default Formulario;
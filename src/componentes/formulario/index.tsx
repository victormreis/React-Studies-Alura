import {FormEvent, useState} from "react";
import Botao from "../botao";
import styles from "./styles.module.scss";
import {ITarefa} from "../../types/ITarefa";
import {v4 as uuidv4} from "uuid";

interface FomularioProps {
	addTarefa: (tarefa: ITarefa) => void;
}

function Formulario({addTarefa}: FomularioProps) {
	const [tarefa, setTarefa] = useState("");
	const [tempo, setTempo] = useState("00:00");

	function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const novaTarefa = {
			id: uuidv4(),
			tarefa,
			tempo,
			selecionado: false,
			completado: false,
		};
		addTarefa(novaTarefa);
		setTarefa("");
		setTempo("00:00");
	}

	return (
		<form
			className={styles.novaTarefa}
			onSubmit={handleSubmit}>
			<div className={styles.inputContainer}>
				<label htmlFor='tarefa'>Adicione um novo estudo</label>
				<input
					name='tarefa'
					value={tarefa}
					onChange={(e) => setTarefa(e.target.value)}
					id='tarefa'
					placeholder='O que você deseja estudar'
					type='text'
					required
				/>
			</div>
			<div className={styles.inputContainer}>
				<label htmlFor='tempo'>Tempo</label>
				<input
					value={tempo}
					onChange={(e) => setTempo(e.target.value)}
					type='time'
					step='1'
					name='tempo'
					id='tempo'
					min='00:00:00'
					max='01:30:00'
					required
				/>
			</div>
			<Botao>Salvar</Botao>
		</form>
	);
}

export default Formulario;

import {useState} from "react";
import Cronometro from "../componentes/cronometro";
import Formulario from "../componentes/formulario";
import Lista from "../componentes/lista";
import styles from "./style.module.scss";
import {ITarefa} from "../types/ITarefa";

function App() {
	const [tarefas, setTarefas] = useState<ITarefa[]>([]);
	const [selecionado, setSelecionado] = useState<ITarefa>();

	function selecionarTarefa(tarefaSelecionada: ITarefa) {
		setSelecionado(tarefaSelecionada);
		setTarefas((tarefasAnteriores) =>
			tarefasAnteriores.map((tarefa) => ({
				...tarefa,
				selecionado:
					tarefa.id === tarefaSelecionada.id ? !tarefa.selecionado : false,
			}))
		);
	}

	function finalizarTarefa() {
		if (selecionado) {
      setSelecionado(undefined)
			setTarefas((tarefasAnteriores) =>
				tarefasAnteriores.map((tarefa) => {
					if (tarefa.id === selecionado.id) {
						return {
							...tarefa,
							selecionado: false,
							completado: true,
						};
					}
          return tarefa
				})
			);
		}
	}

	function addTarefa(tarefa: ITarefa) {
		setTarefas([...tarefas, tarefa]);
	}
	return (
		<div className={styles.AppStyle}>
			<Formulario addTarefa={addTarefa} />
			<Lista
				tarefas={tarefas}
				selecionarTarefa={selecionarTarefa}
			/>
			<Cronometro
				selecionado={selecionado}
				finalizarTarefa={finalizarTarefa}
			/>
		</div>
	);
}

export default App;

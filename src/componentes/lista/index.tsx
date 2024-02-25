import {ITarefa} from "../../types/ITarefa";
import styles from "./styles.module.scss";

interface listaProps {
	tarefas: ITarefa[];
	selecionarTarefa: (tarefaSelecionada: ITarefa) => void;  
}

function Lista({tarefas, selecionarTarefa}: listaProps) {

	return (
		<aside className={styles.listaTarefas}>
			{tarefas.length > 0 && <h2>Estudos do dia</h2>}
			<ul>
				{tarefas.map((item) => (
					<li            
						onClick={() => !item.completado && selecionarTarefa(item)}
						key={item.id}
						className={`${styles.item} ${item.selecionado ? styles.itemSelecionado : ''} ${item.completado ? styles.itemCompletado : ''}`}>
						<h3>{item.tarefa}</h3>
						<span>{item.tempo}</span>
            {item.completado && <span className={styles.concluido}></span>}
					</li>
				))}
			</ul>
		</aside>
	);
}

export default Lista;

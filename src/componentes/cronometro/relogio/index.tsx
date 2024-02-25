import styles from "./relogio.module.scss";

interface RelogioProps {
	tempo?: number;
}

function Relogio({tempo = 0}: RelogioProps) {
	const minutos = Math.floor(tempo / 60);
	const segundos = tempo % 60;
	const [minDez, minUni] = String(minutos).padStart(2, '0');
	const [secDez, secUni] = String(segundos).padStart(2, '0');
	return (
		<>
			<span className={styles.relogioNumero}>{minDez}</span>
			<span className={styles.relogioNumero}>{minUni}</span>
			<span className={styles.relogioDivisao}>:</span>
			<span className={styles.relogioNumero}>{secDez}</span>
			<span className={styles.relogioNumero}>{secUni}</span>
		</>
	);
}

export default Relogio;

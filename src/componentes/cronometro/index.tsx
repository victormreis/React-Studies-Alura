import Botao from "../botao";
import Relogio from "./relogio";
import styles from "./cronometro.module.scss";
import {ITarefa} from "../../types/ITarefa";
import {timeToSec} from "../../common/utils/time";
import {useEffect, useRef, useState} from "react";

interface CronometroProps {
	selecionado: ITarefa | undefined;
	finalizarTarefa: () => void;
}

function Cronometro({selecionado, finalizarTarefa}: CronometroProps) {
	const [tempo, setTempo] = useState<number>();
  const audioRef = useRef<HTMLAudioElement | null>(null);

	useEffect(() => {
		if (selecionado) {
			setTempo(timeToSec(selecionado?.tempo));
		}
	}, [selecionado]);

	function começarCronometro(contador: number = 0) {
		setTimeout(() => {
			if (contador > 0) {
				setTempo(contador - 1);
				return começarCronometro(contador - 1);
			}
			finalizarTarefa();
      audioRef.current?.play()
		}, 1000);
	}

	return (
		<div className={styles.cronometro}>
			<p className={styles.titulo}>Escolha um card e inicie o cronômetro </p>
			<div className={styles.relogioWrapper}>
				<Relogio tempo={tempo} />
			</div>
			<Botao handleOnClick={() => começarCronometro(tempo)}>Começar</Botao>
      <audio ref={audioRef} src="../../../public/sound/beep.mp3" autoPlay={false} />
		</div>
	);
}

export default Cronometro;

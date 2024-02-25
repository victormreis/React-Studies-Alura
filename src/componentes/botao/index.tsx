import {ReactNode} from "react";
import styles from './styles.module.scss'

interface BotaoProps {
	children: ReactNode;
  handleOnClick?: () => void
}

function Botao({children, handleOnClick}: BotaoProps) {
	return <button onClick={handleOnClick} className={styles.botao}>{children}</button>;
}

export default Botao;

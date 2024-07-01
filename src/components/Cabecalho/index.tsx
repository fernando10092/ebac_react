import styles from './Cabecalho.module.css'
import { Header, H1 } from './styledCabecalho'

const Cabecalho = () => (
  <Header className={styles.cabecalho}>
    <H1>EBAC Jobs</H1>
  </Header>
)

export default Cabecalho

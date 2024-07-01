import styles from './Hero.module.css'
import { Formulario } from './styledHero'

const Hero = () => (
  <Formulario className={styles.form}>
    <div className="container">
      <h2 className={styles.heroTitle}>
        As melhores vagas para tecnologia, design e artes visuais.
      </h2>
    </div>
  </Formulario>
)

export default Hero

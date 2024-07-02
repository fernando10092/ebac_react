import styles from './Hero.module.css'
import { Formulario, TituloHero, Div } from './styledHero'

const Hero = () => (
  <Formulario>
    <Div className="container">
      <TituloHero>
        As melhores vagas para tecnologia, design e artes visuais.
      </TituloHero>
    </Div>
  </Formulario>
)

export default Hero

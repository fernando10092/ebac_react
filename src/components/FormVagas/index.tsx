import { FormEvent, useState } from 'react'
import styles from './FormVagas.module.css'

//TESTE FERNANDO
import { Teste, Botao, Formulario, Input } from './styledForm'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <Formulario className={styles.form} onSubmit={aoEnviarForm}>
      <Input
        placeholder='"Front-end, fullstack, node, design"'
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      ></Input>

      <Botao className={styles.btnPesquisar} type="submit">
        Pesquisar
      </Botao>
    </Formulario>
  )
}
export default FormVagas

///USANDO O STYLED
import styled from 'styled-components'

const Teste = styled.button`
  background-color: #192a56;
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: blue;
  margin-left: 8px;
  cursor: pointer;
`

const Botao = styled.button`
  background-color: #192a56;
  border: 1px solid gray;
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: #a7727d;
  margin-left: 8px;
  cursor: pointer;

  &:hover {
    background-color: #2e86de;
    color: white;
  }
`

const Formulario = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: #7f8fa6;
  padding: 32px;
  border-radius: 12px;
  border-color: #192a56;
  margin-top: 40px;
`
const Input = styled.input`
  background-color: #f5f6fa;
  border-color: #353b48;
`

export { Teste, Botao, Formulario, Input }

import styled from 'styled-components'

const Formulario = styled.form`
  height: 360px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2014/10/05/19/02/binary-code-475664_1280.jpg');
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #0abde3;
    content: '';
    opacity: 0.7;
  }
`
const TituloHero = styled.h2`
  font-family: Gloock, serif;
  font-size: 48px;
`

const Div = styled.div`
  position: relative;
  color: #eee;
`

export { Formulario, TituloHero, Div }

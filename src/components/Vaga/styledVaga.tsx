import styled from 'styled-components'

const Container = styled.li`
  border: 1px solid blue);
  background-color: #192a56;
  color: gray;
  padding: 16px;
  transition: all ease .3s;
  border-radius: 8px;

  &:hover{
    background-color: #0abde3;
    color: black;
  }
`

const TituloVaga = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`
const VagaLink = styled.a`
  border-color: azure;
  background-color: #48dbfb;
  color: white;
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;
`

export { Container, TituloVaga, VagaLink }

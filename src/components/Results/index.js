import React from 'react';
import { Container } from './styles';
import Button from '../Button';

const Results = (props) => {

  return(
    <Container visible={props.visible}>
      <div>
        <h1>Olha como é vantajoso!</h1>
        <h3>Sem o <strong>FaleMais {props.plan}</strong>: {props.valor[0].toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h3>
        <h3>Com o <strong>FaleMais {props.plan}</strong>: {props.valor[1].toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h3>
        <Button onClick={()=>props.onClick()} background='#222' text='Retornar'/>
      </div>
    </Container>
  );
}

export default Results;
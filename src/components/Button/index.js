import React from 'react';
import { Container } from './styles';

const Button = (props) => {

  return(
    <Container onClick={()=>props.onClick()} background={ props.background } >
      {props.text}
    </Container>
  );
}

export default Button;
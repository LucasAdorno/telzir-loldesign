import React from 'react';
import { Container } from './styles';

const Header = (props) => {

  return(
    <Container>
      <h1>Telzir</h1>
      <h4 onClick={props.openModal} >{props.text || 'São Paulo'}, SP </h4>
    </Container>
  );
}

export default Header;

import styled from 'styled-components';

export const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top:${props => props.visible };
  transition: all 1s;

  div{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 600px;
    height: 240px;
    border-radius: 40px;
    background: #ff00ff;
  }

  div h1{
    text-align: center;
    font-size: 44px;
    font-family: sans-serif;
    color: #fff;
  }

  select{
    width: 80%;
    height: 40px;
    outline: none;
    border-radius: 10px;
    background: #fff;
  }

  @media(max-width: 767px){
    div{
     width: 100%;
     border-radius: 0;
    }

    div h1{
     text-align: center;
     font-size: 32px;
     font-family: sans-serif;
     color: #fff;
    }
  }

`;
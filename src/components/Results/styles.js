
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top:${props => props.visible};
  transition: all 2s;

  div{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 600px;
    height: 340px;
    border-radius: 40px;
    background: #20005a;
  }

  div h1{
    text-align: center;
    font-size: 40px;
    font-family: 'Comfortaa', cursive;
    color: #fafafa;
  }

  div h3{
    width: 86%;
    padding-bottom: 7px;
    border-bottom: 1px solid #00ff00aa;
    text-align: left;
    font-size: 20px;
    font-family: 'Expletus Sans', cursive;
    color: #fafafa;
  }


  @media(max-width: 767px){
    div{
     width: 100%;
     border-radius: 0;
    }

    div h1{
     font-size: 32px;
    }
  }

`;
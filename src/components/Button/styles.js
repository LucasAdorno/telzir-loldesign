import styled from 'styled-components';

export const Container = styled.button`

    width: 146px;
    height: 43px;
    border: none;
    border-radius: 30px;
    font-family: 'Comfortaa', cursive;
    font-size: 16px;
    color: #fafafa;
    background: ${props=>props.background};
    outline: none;
    cursor: pointer;
    transition: all 0.3s;

  &:hover {
    width: 176px;
  }

`;
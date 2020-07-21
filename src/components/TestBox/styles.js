import styled from 'styled-components';

export const Container = styled.div`

  display: flex;
  justify-content: space-around;
  width:86%;
  margin: 30px auto 0;

  h1 {
    width:56%;
    font-family: 'Expletus Sans', cursive;
    font-size: 92px;
    color: #fff;
    text-shadow: 2px 2px 4px #5554;
  }

  .testBox{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: 420px;
    padding: 10px;
    border-radius: 34px 0 34px 0;
    background: #00FFA399;
  }

  .testBox label{
    display: flex;
    margin-bottom: 13px;
    flex-direction: column;
    font-family: 'Comfortaa', cursive;
    font-size: 16px;
    color: #fafafa;
  }

  .testBox label select, .testBox label input{
    width: 263px;
    height: 45px;
    border: none;
    border-radius: 8px;
    background: #fafafa;
    outline: none;
  }

  .testBox button {
    width: 156px;
    height: 43px;
    border: none;
    border-radius: 30px;
    background: #ffd53f;
    outline: none;
    cursor: pointer;
  }

  @media(max-width: 767px){
    flex-direction: column;
    align-items: flex-end;

    h1{
      width:100%;
      font-size: 44px;
    }
  }
`;
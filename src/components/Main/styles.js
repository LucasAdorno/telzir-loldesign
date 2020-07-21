import styled from 'styled-components';

export const Container = styled.div`

  @import url('https://fonts.googleapis.com/css2?family=Expletus+Sans:wght@700&display=swap');

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

  @media(max-width: 767px){
    flex-direction: column;
    align-items: flex-end;

    h1{
      width:100%;
      font-size: 44px;
    }
  }
`;
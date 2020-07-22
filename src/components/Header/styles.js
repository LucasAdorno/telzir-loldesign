import styled from 'styled-components';

export const Container = styled.header`

    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 85px;
    background: #FFFFFF;
    padding: 0 40px 0 40px;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    font-family: 'Imprima', sans-serif;


    h1 {
        font-size: 36px;
        font-weight: normal;
        color: #00FFA3
    }

    h4 {
        font-weight: normal;
        cursor: pointer;
    }

    @media(max-width: 767px){
    height: 75px;
    padding: 0 20px 0 20px;

    }

`;
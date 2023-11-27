import React from 'react'
import styled from 'styled-components'

function MainLeftSide() {
    return (
        <MainLeftSideStyled>
            <CountStyled>
                <p>Total</p>
                <p>0,00€</p>
            </CountStyled>
            <p className='textGray'>Votre commande est vide.</p>
        </MainLeftSideStyled>
        
    )
}

export default MainLeftSide


const MainLeftSideStyled = styled.div`
    display: flex;
    flex-direction: column;

    .textGray{
        display: flex;
        justify-content: center;
        margin: auto 0;
        font-family: "Pacifico";
        font-size: 20px;
        color: grey;
    }
`;

const CountStyled = styled.div`
    display: flex;
    justify-content: space-between;
    background: #000;
    color: #67b6b9;
    padding: 0 15px;
    font-family: "Pacifico";
    font-size: 20px;
`;


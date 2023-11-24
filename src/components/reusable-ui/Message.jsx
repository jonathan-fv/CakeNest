import React from 'react'
import styled from 'styled-components'
import OrderContext from '../../context/OrderContext';
import { useContext } from 'react';
import { refreshPage } from "../../utils/window"

export default function Message() {

    const { isModeAdmin } = useContext(OrderContext)

    return (
        <MessageBox>
        {isModeAdmin ? 
            <div>
                <p>Il n'y a plus de produits disponibles</p>
                <p>Cliquez ci-dessous pour les réinitialiser</p>
                <button onClick={() => refreshPage()}>Générer de nouveau gateaux</button>
            </div>
            
        :
            <div>
                <p>Victime de notre succès</p>
                <p>De nouvelles recettes sont en préparation, revenez vite ! </p>
            </div>
            
        }
            </MessageBox>
    )
}

const MessageBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: 'Pacifico';
    font-size: 35px;
    
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-family: 'Pacifico';
        font-size: 35px;
    }
    p{
        margin: 10px 0;
    }

    button{
        margin-top : 20px;
        background-color: #67b6b9;
        color: white;
        padding: 25px;
        border: none;
        border-radius: 7px;
        font-size: 20px;
        cursor: pointer;
    }

`;
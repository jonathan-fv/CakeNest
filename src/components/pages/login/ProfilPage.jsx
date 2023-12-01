import React from 'react'
import styled from 'styled-components'
import { BsPersonCircle } from "react-icons/bs"
import { useParams } from "react-router-dom"
import { useState, useContext } from "react";
import UserContext from '../../../context/UserContext'

import InfoUser from '../../reusable-ui/InfoUser'
import { fakeUser } from '../../../fakeData/fakeUser';


export default function ProfilPage() {

    const { username } = useParams()

    const [address, setAddress] = useState("")
    const [postalCode, setPostalCode] = useState("")
    const [city, setCity] = useState("")
    const { user, setUser , currentUserId, setUserActive} = useContext(UserContext)
    
    const selectedInfoIndex = user.findIndex(
        (info) => info.id === currentUserId
    )

    console.log(user)
    console.log(currentUserId)


    const selectedInfo = user.find((info) => info.id === currentUserId);

    console.log(currentUserId)
    
    const handleChangeAddress = (e) =>{
        const updatedInfo = { ...selectedInfo, address: e.target.value }
        const updatedUser = [...user]
        updatedUser[selectedInfoIndex] = updatedInfo
        setUser(updatedUser)
    }

    const handleChangePostalCode = (e) =>{
        const postalCodeValue=e.target.value
        setPostalCode(postalCodeValue)
    }

    const handleChangeCity = (e) =>{
        const cityValue=e.target.value
        setCity(cityValue)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newInfo = {
            address: address,
            code_postal: postalCode,
            ville: city
        }
        setUser(newInfo)
    }

    return (
        <ProfilStyled>
            <CardStyled>
                <InfoCardStyled>
                    <div className="icon">
                        <BsPersonCircle />
                    </div>
                    <div>
                        <h1>Hello, <span>{username}</span></h1>
                    </div>
                </InfoCardStyled>
                <InfoUser />
            </CardStyled>
            <BoxFormStyled>
                <form onSubmit={handleSubmit}>
                    <div className='inputBox'>
                        <label>Adresse</label>
                        <input type="text" placeholder="Adresse" onChange={() => handleChangeAddress} ></input>
                    </div>
                    <div className='inputBox'>
                        <label>Code Postal</label>
                        <input type="number" placeholder="Code Postal" onChange={handleChangePostalCode} ></input>
                    </div>
                    <div className='inputBox'>
                        <label>Ville</label>
                        <input type="text" placeholder="Ville" onChange={handleChangeCity}></input>
                    </div>
                    <div className='BoxButton'>
                        <button className='Blue'>Modifier vos information</button>
                        <button className='Red'>Supprimer vos information</button>
                    </div>
                    
                </form>
            </BoxFormStyled>
        </ProfilStyled>
    )
}

const ProfilStyled = styled.div`
    width: 80vw;
    height: 90vh;
    margin: 40px auto;
`;

const CardStyled = styled.div`
`;

const InfoCardStyled = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    .icon{
        font-size: 2rem;
        margin-right: 10px;
    }
`;

const BoxFormStyled = styled.div`
    margin-top: 50px;

    .inputBox{
        display: flex;
        flex-direction: column;
        
    }
    .inputBox label{
        color: grey;
        margin: 10px 0;
    }
    .inputBox input{
        padding: 10px;
    }
    .BoxButton{
        display: flex;
        justify-content: right;
        margin: 30px 0;
    }
    .Blue, .Red{
        color: white;
        border-radius: 7px;
        cursor: pointer;
        padding: 10px;
        margin: 20px;
        text-align: right ;
    }
    .Blue{
        border : 1px solid #51a7e1;
        background-color: #51a7e1;
    }
    .Red{
        border : 1px solid #c4151c;
        background-color: #c4151c;
    }
`;

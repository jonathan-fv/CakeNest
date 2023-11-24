import styled from "styled-components"
import { FaEuroSign } from "react-icons/fa";
import { MdPhotoCamera } from "react-icons/md";
import { GiCupcake } from "react-icons/gi";
import { useContext, useState } from "react";
import MenuContext from "../../../../../../context/MenuContext";
import PreviewImage from "../../../../../reusable-ui/PreviewImage";
import { GrValidate } from "react-icons/gr";

export default function AddProduct() {

    const [img, setImageURL] = useState("")
    const [price, setPrice] = useState("")
    const [name, setName] = useState("")

    const { menu, setMenu } = useContext(MenuContext)
    const [showSuccessAdd, setShowSuccessAdd] = useState(false)

    const handleChangeImg = (e) => {
        const imageValue = e.target.value
        setImageURL(imageValue)
        if(!imageValue || !imageValue.item(0))return 
        setImageURL(PreviewImage(imageValue))
    }

    const handleChangePrice = (e) =>{
        const priceValue = e.target.value
        setPrice(priceValue)
    }

    const handleChangeName = (e) =>{
        const nameValue = e.target.value
        setName(nameValue)
    }

    const resetValue = () => {
        setName("")
        setImageURL("")
        setPrice("")
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newProduct = {
            id: menu.length + 1,
            imageSource: img,
            title: name,
            price: price,
            quantity: 0,
            isAvailable: true,
            isAdvertised: false,
        }
        setMenu([...menu, newProduct])
        resetValue()

        setShowSuccessAdd(true)

        setTimeout(() => {
            setShowSuccessAdd(false);
        }, 20000)
    }

    return (
        <div>
            <Formulaire onSubmit={handleSubmit}>
            <div className="form-group">
                <div className="imgBox">
                    <div className="img">
                    {
                        img ? (<img src={img}/>) : <p>Pas d'image à afficher</p>
                    }
                    </div>
                </div>
                <div className= "inputBox">
                    <div className= "inputDesign">
                        <GiCupcake />
                        <input type="text" placeholder="Nom de l'article" onChange={handleChangeName}></input>
                    </div>
                    <div className= "inputDesign">
                        <MdPhotoCamera />
                        <input type="text" placeholder="Image de l'article" onChange={handleChangeImg}></input>
                    </div>
                    <div className= "inputDesign">
                        <FaEuroSign />
                        <input type="text" placeholder="Prix de l'article" onChange={handleChangePrice}></input>
                    </div>
                    <div className= "inputBtn">
                        <button>Ajouter un nouveau produit</button>
                        {showSuccessAdd && (
                            <div>
                                <GrValidate />
                                <p>Ajouté avecc succès</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            </Formulaire>
        </div>
    )
}

const Formulaire = styled.form`
    .form-group{
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 20px;
    }
    
    .imgBox{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20%;
        height: 220px;
        border: 1px solid black;
        font-family: 'Pacifico';
    }
    .img img{
        width: 250px;
        height: 20vh;
        object-fit: contain;
    }
    .inputBox{
        display: flex;
        flex-direction: column;
        width: 50%;
        gap: 10px;
        padding-left: 20px;
    }
    .inputBox .inputDesign{
        display: flex;
        align-items: center;
        gap: 5px;
        padding-left: 10px;
        background-color: lightgray;
        border-radius: 5px;
    }

    .inputBtn{
        display: flex;
        flex-direction: row;
        padding-right: 20px;
    }

    .inputBtn div{
        display: flex;
        justify-content: center;
        align-items: center;
        color: green;
    }
    input{
        border: none;
        padding: 18px 10px;
        background-color: lightgray;
        width: 100%;
    }
        
    button{
        background-color: #60bd4f;
        color: white;
        border-radius: 5px;
        padding: 10px 15px;
        border: none;
    }

    .inputBtn p{
        color: green;
        padding-left: 15px;
    }
`


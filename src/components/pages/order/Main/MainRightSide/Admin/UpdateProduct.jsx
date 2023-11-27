import styled from "styled-components"
import { FaEuroSign } from "react-icons/fa";
import { MdPhotoCamera } from "react-icons/md";
import { GiCupcake } from "react-icons/gi";
import { useContext, useState, useRef } from "react";
import MenuContext from "../../../../../../context/MenuContext";
import { GrValidate } from "react-icons/gr";
import OrderContext from "../../../../../../context/OrderContext";

export default function UpdateProduct() {

    const { isModeAdmin, setIsModeAdmin, currentCardId, setCardActive }  = useContext(OrderContext)
    
    const [img, setImageURL] = useState("")
    const [price, setPrice] = useState("")
    const [name, setName] = useState("")

    const { menu, setMenu } = useContext(MenuContext)

    const selectedCardIndex = menu.findIndex(
        (card) => card.id === currentCardId
    )
    const selectedCard = menu.find((card) => card.id === currentCardId)


    const [showSuccessAdd, setShowSuccessAdd] = useState(false)
    
    const handleChangeImg = (e) => {
        const updatedCard = { ...selectedCard, imageSource: e.target.value };
        const updatedMenu = [...menu];
        updatedMenu[selectedCardIndex] = updatedCard;
        setMenu(updatedMenu);
    }

    const handleChangePrice = (e) =>{
        const updatedCard = { ...selectedCard, price: e.target.value }
        const updatedMenu = [...menu]
        updatedMenu[selectedCardIndex] = updatedCard
        setMenu(updatedMenu)
    }

    const handleChangeName = (e) =>{
        const updatedCard = { ...selectedCard, title: e.target.value }
        const updatedMenu = [...menu]
        updatedMenu[selectedCardIndex] = updatedCard
        setMenu(updatedMenu)
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
            imageSource: selectedCard.imageSource,
            title: selectedCard.title,
            price: selectedCard.price,
            quantity: 0,
            isAvailable: true,
            isAdvertised: false,
        }
        
        setMenu([...menu, newProduct])
        resetValue()

        setShowSuccessAdd(true)

        setTimeout(() => {
            setShowSuccessAdd(false);
        }, 2000)
    }



    return (
        selectedCard ?
        <div>
            <Formulaire onSubmit={handleSubmit}>
            <div className="form-group">
                <div className="imgBox">
                    <div className="img">
                        {
                            selectedCard.imageSource ? (<img src={selectedCard.imageSource} alt="preview image" />) : (<p>pas d'image à afficher</p>)
                        }
                    </div>
                </div>
                <div className= "inputBox">
                    <div className= "inputDesign">
                        <GiCupcake />
                        <input type="text" placeholder="Nom de l'article" onChange={handleChangeName} value={selectedCard.title} autoFocus="true"></input>
                    </div>
                    <div className= "inputDesign">
                        <MdPhotoCamera />
                        <input type="text" placeholder="Image de l'article" onChange={handleChangeImg} value={selectedCard.imageSource}></input>
                    </div>
                    <div className= "inputDesign">
                        <FaEuroSign />
                        <input type="text" placeholder="Prix de l'article" onChange={handleChangePrice} value={selectedCard.price}></input>
                    </div>
                    <div className= "inputBtn">
                        <button>Modifier le produit</button>
                        {showSuccessAdd && (
                            <div>
                                <GrValidate />
                                <p>Modifier avecc succès</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            </Formulaire>
        </div>
        :
        <UpdateMessage>
            <p>Cliquer sur un produit pour le modifier</p>
        </UpdateMessage>
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
    .img p{
        text-align: center;
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
`;

const UpdateMessage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 280px;
    font-family: 'Pacifico';
    font-size: 35px;
`;
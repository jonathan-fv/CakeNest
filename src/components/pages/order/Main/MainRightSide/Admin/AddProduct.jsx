import styled from "styled-components"
import { FaEuroSign } from "react-icons/fa";
import { MdPhotoCamera } from "react-icons/md";
import { GiCupcake } from "react-icons/gi";

export default function AddProduct() {
    return (
        <div>
            <Formulaire>
            <div className="form-group">
                <div className="imgBox">
                    <div className="img">
                    <p>Pas d'image à afficher</p>
                    </div>
                </div>
                <div className= "inputBox">
                    <div className= "inputDesign">
                        <GiCupcake />
                        <input type="text" placeholder="Nom de l'article"></input>
                    </div>
                    <div className= "inputDesign">
                        <MdPhotoCamera />
                        <input type="text" placeholder="Image de l'article"></input>
                    </div>
                    <div className= "inputDesign">
                        <FaEuroSign />
                        <input type="text" placeholder="Prix de l'article"></input>
                    </div>
                    <div className= "inputBtn">
                        <button>Ajouter un nouveau produit</button>
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
`


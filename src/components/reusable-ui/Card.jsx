import styled from "styled-components"
import { formatPrice } from "../../utils/math"



function Card({data}) {
    return (
        <CardStyled>
            <CardImgStyled>
                <img src="/images/cupcake-item.png"></img>
            </CardImgStyled>
            <CardContentStyled>
                <p className="cakeName">{data.title}</p>
            </CardContentStyled>
            <CardBoxInfo>
                <p>{formatPrice(data.price)}</p>
                <button>Ajouter</button>
            </CardBoxInfo>
        </CardStyled>
    )
}

export default Card

const CardStyled = styled.div`
    width: 20%;
    box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
    margin: 30px;
    border-radius: 10px;
    font-family: "Open Sans";
    background-color : white;
`;

const CardImgStyled = styled.div`
    display: flex;
    justify-content: center;

    img{
        width: 100%;
    }
`;

const CardContentStyled = styled.div`
    text-align: left;
    padding: 0 10px;
    font-family: "Pacifico", sans-serif;
    font-size: 20px;

`;

const CardBoxInfo = styled.div`
    width: 100%;
    display: flex;
    flex-direction : row;
    justify-content: space-around;
    align-items: center;
    padding-bottom : 25px;

    p{
        color: #67b6b9;
    }
    button{
        background-color: #67b6b9;
        border: none;
        padding: 10px 30px;
        color: white;
        border-radius: 5px;
        transition: all ease-in-out 0.5s;
        font-weight : 700;
    }

    button:hover{
        background-color : white;
        color : #67b6b9;
        border: 1px solid #67b6b9;
    }
`;
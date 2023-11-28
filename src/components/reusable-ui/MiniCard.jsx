import styled from "styled-components"
import { FaRegTrashAlt } from "react-icons/fa";
import { useContext, useState } from 'react'
import { formatPrice } from "../../utils/maths"
import BasketContext from "../../context/BasketContext";
import OrderContext from "../../context/OrderContext";
import { theme } from "../../theme";



export default function MiniCard({product, quantity}) {

    const [isHovered, setIsHovered] = useState(false);
    const {basket, setBasket} = useContext(BasketContext)
    const { isModeAdmin, setIsModeAdmin, currentCardId, setCardActive } = useContext(OrderContext)



    const deleteArticle = () => {
        setBasket([...basket.filter((article) => article.product.id != product.id)])
    }

    return (
        <MiniCardStyled $activeCard = {isModeAdmin && currentCardId === product.id ? "selected" : "" }
        $isHover = {isHovered === true ? "hover" : ""}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
            <div className="imgBox">
                <img src={product.image}/>
            </div>
            <div className="infoBox">
                <p className="name">{product.title}</p>
                <p className="price">{formatPrice(product.price)}</p>
            </div>
            <div className='quantity'>
                <p>x {quantity}</p>
                <button onClick={deleteArticle}>
                    <FaRegTrashAlt />
                </button>
            </div>
        </MiniCardStyled>
    )
}

const MiniCardStyled = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 20px 15px;
    border-radius: 7px;
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2);
    padding: 15px 0; 
    height: 90px;
    background-color: ${(props) =>
        props.$activeCard === "selected"
        ? theme.colors.primary
        : theme.colors.white
    };

    

    .imgBox{
        width: 20%;
        height: 90px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .imgBox img{
        width: 170%;
        object-fit: contain;
    }
    
    .infoxBox{
        width: 60%;
        display: flex;
        flex-direction: column;
        justify-content: left;
        align-items: center;
        height: 90px;
    }

    .name{
        font-family: "Pacifico";
        margin: 0 0 2px 0;
    }

    .price{
        margin: 3px 0 0 0;
        color: ${(props) =>
            props.$activeCard === "selected"
                ? theme.colors.white
                : theme.colors.primary
            };
    }

    .quantity{
        width: 20%;
        display: flex;
        justify-content: right;
        align-items: center;
        height: 90px;
    }
    
    .quantity p{
        color: ${(props) =>
            props.$activeCard === "selected"
                ? theme.colors.white
                : theme.colors.primary
            };
    }
    button{
        border: none;
        color: white;
        background-color: red;
        position: absolute;
        height: 100%;
        width: 20%;
        right: -70px;
        border-radius: 0 7px 7px 0;
        cursor: pointer;
        top: 0;
        transition: all 0.3s;
        visibility: ${(props) =>
            props.$isHover === "hover"
            ? "visible"
            : "hidden"
        };
        z-index: ${(props) =>
            props.$isHover === "hover"
            ? "1"
            : "-1"
        };
    }
    &:hover .quantity button{
        right: 0;
    }
`;
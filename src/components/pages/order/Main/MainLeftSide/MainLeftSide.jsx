import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import Basket from '../MainLeftSide/Basket'
import BasketContext from '../../../../../context/BasketContext'
import MenuContext from '../../../../../context/MenuContext'
import { counterPrice } from "../../../../../utils/counterPrice"

function MainLeftSide() {

    const { basket, setBasket } = useContext(BasketContext)
    const { menu , setMenu} = useContext(MenuContext)

    const [totalPrice, setTotalPrice] = useState(0)

    const checkIsInBasket = () => {
        basket.map((article) => {
            const getArticleIndex = menu.findIndex(
                (articleMenu) => articleMenu.id === article.product.id
            )
            if(getArticleIndex === -1){
                setBasket([...basket.filter((articleBasket) => articleBasket.product.id != article.product.id)])
            }
        })
    }

    useEffect(() => {
        checkIsInBasket()
        const prices = []
        basket.map((product) => {
            prices.push({price:product.product.price, quantity:product.quantity})
        })
        const totalValue = counterPrice(prices)
        setTotalPrice(totalValue)
    }, [basket])

    useEffect(() => {
        checkIsInBasket()
        menu.map((productMenu) => {
            basket.map((productBasket) => {
                if (productMenu.id === productBasket.product.id) {
                    if (productMenu.leftDescription !== productBasket.product.price ||
                        productMenu.title !== productBasket.product.title ||
                        productMenu.imageSource !== productBasket.product.imageSource)
                    {
                        const getFProductIndex = basket.findIndex(
                            (productObject) => productObject.product.id === productBasket.product.id
                        )
                        const newProduct = {
                            product:productMenu,
                            quantity:productBasket.quantity
                        }
                        const updateBasket = [...basket];
                        updateBasket[getProductIndex] = newProduct
                        setBasket(updateBasket);
                    }
                }
            })
        })
    }, [menu])

    return (
        <MainLeftSideStyled>
            <CountStyled>
                <p className='total'>Total</p>
                <p>{totalPrice}</p>
            </CountStyled>
            <div>
                {basket.length > 0 ? (
                    <Basket />
                ): (
                    <div className='textGray'>
                        <p>Votre panier est vide.</p>
                    </div>
                    
                )}
            </div>

        </MainLeftSideStyled>
        
    )
}

export default MainLeftSide

const MainLeftSideStyled = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    &::-webkit-scrollbar{
        display: none;
    }

    .textGray{
        font-family: "Pacifico";
        font-size: 20px;
        color: grey;
        height: 77vh;
        display: flex;
        justify-content: center;
        align-items: center
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


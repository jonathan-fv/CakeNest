import styled from "styled-components";
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import { theme } from "../../../theme";
import { useEffect, useState } from "react"
import OrderContext from "../../../context/OrderContext"
import { fakeMenu2 } from "../../../fakeData/fakeMenu";
import MenuContext from "../../../context/MenuContext";
import BasketContext from "../../../context/BasketContext"
import { getUser } from "../../../api/user";
import UserContext from "../../../context/UserContext";
import { getProduct } from "../../../api/product";


export default function OrderPage() {


    const [isModeAdmin, setIsModeAdmin] = useState(false)
    const [isCollapsed, setIsCollapsed] = useState(false)
    const [currentTabSelected, setCurrentTabSelected] = useState("add")
    const [menu, setMenu] = useState(fakeMenu2)
    const [currentCardId, setCardActive] = useState()
    const [basket, setBasket] = useState([])
    const [user, setUser] = useState([])
    const [isLogeIn , setIsLoggedIn] = useState(false)

    const orderContextValue = {
        isModeAdmin,
        setIsModeAdmin,
        isCollapsed,
        setIsCollapsed,
        currentTabSelected,
        setCurrentTabSelected,
        currentCardId,
        setCardActive,
    }

    const menuContextValue = {
        menu,
        setMenu
    }

    const basketContextValue = {
        basket,
        setBasket
    }

    const userContextValue = {
        user,
        setUser,
        isLogeIn,
        setIsLoggedIn,
        
    }

    //appel api qui permet de récupérer un user


    return (
        <OrderContext.Provider value={orderContextValue}>
            <UserContext.Provider value={userContextValue}>
                <MenuContext.Provider value={menuContextValue}>
                    <BasketContext.Provider value={basketContextValue}>
                        <OrderPageStyled>
                        <div className="container">
                            <Navbar />
                            <Main />
                        </div>
                        </OrderPageStyled>
                    </BasketContext.Provider>
                </MenuContext.Provider>
            </UserContext.Provider>
        </OrderContext.Provider>
        )
    }

const OrderPageStyled = styled.div`
    background: ${theme.colors.primary};
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    
    .container {
        height: 95vh;
        width: 1400px;
        display: flex;
        flex-direction: column;
        border-radius: ${theme.borderRadius.extraRound};
        
    }
`;
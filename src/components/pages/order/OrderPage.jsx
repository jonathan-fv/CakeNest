import styled from "styled-components";
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import { theme } from "../../../theme";
import { useState } from "react"
import OrderContext from "../../../context/OrderContext"
import { fakeMenu2 } from "../../../fakeData/fakeMenu";
import MenuContext from "../../../context/MenuContext";


export default function OrderPage() {
    const [isModeAdmin, setIsModeAdmin] = useState(false)
    const [isCollapsed, setIsCollapsed] = useState(false)
    const [currentTabSelected, setCurrentTabSelected] = useState("add")
    const [menu, setMenu] = useState(fakeMenu2)
    const [currentCardId, setCardActive] = useState()

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

    return (
        <OrderContext.Provider value={orderContextValue}>
            <MenuContext.Provider value={menuContextValue}>
                <OrderPageStyled>
                <div className="container">
                    <Navbar />
                    <Main />
                </div>
                </OrderPageStyled>
            </MenuContext.Provider>
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
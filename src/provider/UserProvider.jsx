import { useState } from "react"
import UserContext from "../context/UserContext"
import MenuContext from "../context/MenuContext"
import BasketContext from "../context/BasketContext"
import { fakeUser } from "../fakeData/fakeUser"


export const UserProvider = ({ children }) => {
    const [user, setUser, currentUserId] = useState(fakeUser)
    const [ isLoggedIn, setIsLoggedIn] = useState(false)
    const [menu, setMenu] = useState([])
    const [basket, setBasket] = useState([])
    const userContextValue = {
        user,
        setUser,
        isLoggedIn,
        setIsLoggedIn,
        currentUserId
    }
    const menuContextValue = {
        menu,
        setMenu
    }
    const basketContextValue = {
        basket,
        setBasket
    }

    return (
        <UserContext.Provider value={userContextValue}>
            <MenuContext.Provider value={menuContextValue}>
                <BasketContext.Provider value={basketContextValue}>
                    {children}
                </BasketContext.Provider>
            </MenuContext.Provider>
        </UserContext.Provider>
    )
}
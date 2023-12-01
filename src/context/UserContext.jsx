import { createContext } from "react"
import { fakeUser } from "../fakeData/fakeUser"



export default createContext({

    user : [{
        menu:{},
        fakeUser
    }],
    setUser: () => {},
    isLogedIn : false,
    setIsLoggedIn:()=>{},

    currentUserId: "",
    setUserActive: () => {},
})


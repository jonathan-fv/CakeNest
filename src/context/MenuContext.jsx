import { createContext } from "react";


export default createContext({
    menu: [
        {
            id: "",
            imageSource: "",
            title: "",
            price: 0,
            quantity: 0,
            isAvailable: true,
            isAdvertised: false,
        }
    ],

    setMenu: () => {
        
    }
})

import { createContext } from "react"

export default createContext({

    basket: [
        {
            product: {},
            quantity : 0,
        }
    ],
    setBasket: () => {}
}) 

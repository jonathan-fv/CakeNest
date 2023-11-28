import { useContext } from "react"
import BasketContext from "../../../../../context/BasketContext"
import MiniCard from "../../../../reusable-ui/MiniCard"


export default function Basket() {

    const { basket } = useContext(BasketContext)
    return (
        <div>
            {
                basket.map(({product, quantity}, i) => {
                    return (
                        <MiniCard
                            key={i}
                            product={product}
                            quantity={quantity}
                        />
                    )
                })
            }
        </div>
    )
}

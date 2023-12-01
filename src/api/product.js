import { doc, getDoc, setDoc } from "firebase/firestore"
import {db} from "./firebase-config"

export const getProduct = async (idUser) =>{
    const docRef = doc(db, "users", idUser)
    const docSnapShot = await getDoc(docRef)
    if(docSnapShot.exists()){
        const productData = docSnapShot.data()
        const userMenu = productData.menu
        console.log(userMenu)
        return userMenu
    }
}

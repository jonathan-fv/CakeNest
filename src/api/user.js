import { doc, getDoc, getDocs, collection, setDoc, Firestore } from "firebase/firestore"
import {db} from "./firebase-config"
import { fakeMenu1 } from "../fakeData/fakeMenu"
import { useContext } from "react"
import UserContext from "../context/UserContext"
import MenuContext from "../context/MenuContext"


// const { user, setUser, isLoggedIn, setIsLoggedIn } = useContext(UserContext)
// const { menu, setMenu } = useContext(MenuContext)


export const getUser = async (idUser) => {
    const docRef = doc(db, "users", idUser)
    const docSnapShot = await getDoc(docRef)
    if(docSnapShot.exists()){
        const userReceived = docSnapShot.data()
        //console.log(userReceived)
        return userReceived
    } else{
        console.log(idUser + " no exist, creating..")
        createUser(idUser)
    }
}
export const getUserInfo = async (userName) => {
    const docRef = doc(db, "users", userName)
    // check if user exist
    const checkUser = await getDoc(docRef)
    // return user info
    const userInfo = await getDoc(docRef).then((querySnapshot) => {
        return querySnapshot.data()
    })
    if (checkUser.exists()) {
        setUser(userInfo)
        setMenu(userInfo.menu)
        console.log(userInfo)
        return userInfo
    } else {
        console.log("user " + userName + " doesn't exist")
        return
    }
}

export const createUser = (idUser) => {
    const docRef = doc(db, "users", idUser)
    const infos = {
        username : idUser,
        menu : fakeMenu1
    }
    setDoc(docRef,infos)
    return infos
}
import { BsPersonCircle } from "react-icons/bs"
import { Link, useParams } from "react-router-dom"
import styled from "styled-components"
import { theme } from "../../../../theme"
import { useEffect } from "react"
import { useContext } from "react"
import UserContext from "../../../../context/UserContext"
import { doc, getDoc } from "firebase/firestore"
import {db} from "../../../../api/firebase-config"

export default function Profile() {
  const { user, setUser } = useContext(UserContext)
  const { username } = useParams()

  // const getUserInfo = async (userName) => {
  //   const docRef = doc(db, "users", userName)

  //   // check if user exist
  //   const checkUser = await getDoc(docRef)

  //   // return user info
  //   const userInfo = await getDoc(docRef).then((querySnapshot) => {
  //       return querySnapshot.data()
  //   })

  //   if (checkUser.exists()) {
  //       setUser(userInfo)
  //       //console.log(userInfo)
  //       return userInfo
  //   } else {
  //       console.log("user " + userName + " doesn't exist")
  //       return
  //   }
  // }

  return (
    <ProfileStyled>
      <div className="info">
        <p>
          Salut <b>{username}</b>
        </p>
        <Link to="/">
          <div className="description">
            <small>Se déconnecter</small>
          </div>
        </Link>
      </div>
      <div className="picture">
      <Link to={`/profil/${username}`}>
        <BsPersonCircle />
      </Link>
        
      </div>
    </ProfileStyled>
  )
}

const ProfileStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 100px;

  .info {
    text-align: right;
    margin-right: 10px;
    p {
      margin: 0;
      color: ${theme.colors.greyBlue};
      b {
        color: ${theme.colors.primary};
      }
    }
    a {
      text-decoration: none;
      .description {
        &:hover {
          text-decoration: underline;
          color: ${theme.colors.greyDark};
        }
        small {
          font-size: ${theme.fonts.size.XXS};
          color: ${theme.colors.greyBlue};
          font-weight: ${theme.fonts.weights.medium};
          text-decoration: none;
          position: relative;
          bottom: 2px;
        }
      }
    }
  }

  .picture {
    height: auto;
    display: flex;
    height: 100%;
    font-size: ${theme.fonts.size.P4};
    color: ${theme.colors.greyBlue};
  }
`

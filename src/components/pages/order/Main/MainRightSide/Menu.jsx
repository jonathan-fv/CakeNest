import { useContext, useState } from "react"
import styled from "styled-components"
import { theme } from "../../../../../theme"
import Card from "../../../../reusable-ui/Card"
import MenuContext from "../../../../../context/MenuContext"
import { getProduct } from "../../../../../api/product"
import UserContext from "../../../../../context/UserContext"

export default function Menu() {

  
  const {menu, setMenu} = useContext(MenuContext)
  const {user, setUser} = useContext(UserContext)

  console.log()
  
  return (
    <MenuStyled className="menu">
      {menu.map(({ id, title, imageSource, price }) => {
        return (
          <Card
            key={id}
            id={id}
            title={title}
            imageSource={imageSource}
            leftDescription={price}
          />
        )
      })}
    </MenuStyled>
  )
}

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  overflow-y: scroll;
  overflow-y: scroll;
  &::-webkit-scrollbar{
    display: none;
  }
`

import { useContext } from "react"
import styled from "styled-components"
import OrderContext from "../../../../../context/OrderContext"
import { theme } from "../../../../../theme"
import Admin from "./Admin/Admin"
import Menu from "./Menu"
import MenuContext from "../../../../../context/MenuContext"
import Message from "../../../../reusable-ui/Message"

export default function MainRightSide() {
  const { isModeAdmin } = useContext(OrderContext)
  const { menu, setMenu} = useContext(MenuContext)

  return (
    <MainRightSideStyled>
      {menu.length > 0 ? <Menu /> : <Message/>}
      {isModeAdmin && <Admin />}
    </MainRightSideStyled>
  )
}

const MainRightSideStyled = styled.div`
  position: relative;
  overflow-y: hidden;
  display: grid;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
`

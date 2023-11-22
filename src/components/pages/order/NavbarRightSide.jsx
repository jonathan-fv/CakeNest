import { Link } from "react-router-dom"
import styled from "styled-components"
import Profile from "./Profile"

export default function NavbarRightSide({ username }) {
  return (
    <NavbarRightSideStyled className="right-side">
      <Profile username={username} />
    </NavbarRightSideStyled>
  )
}

const NavbarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px;
`

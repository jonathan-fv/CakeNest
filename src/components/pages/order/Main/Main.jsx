import styled from "styled-components"
import { theme } from "../../../../theme"
import MainRightSide from "./MainRightSide/MainRightSide"

export default function Main() {
  return (
    <MainStyled className="main">
      <MainRightSide />
    </MainStyled>
  )
}

const MainStyled = styled.div`
  background: ${theme.colors.background_white};
  flex: 1; // ou vous pouvez faire ça : height: calc(95vh - 10vh);

  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

  display: grid;
  grid-template-columns: 1fr;

  overflow-y: scroll;
  &::-webkit-scrollbar{
    display: none;
  }
`
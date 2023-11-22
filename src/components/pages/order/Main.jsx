import styled from "styled-components"
import { theme } from "../../../theme"
import Card from "../../reusable-ui/Card"
import { fakeMenu2 } from "../../../fakeData/fakeMenu"

export default function Main() {

  const cards = fakeMenu2.map((card) => 
    <Card key={card.id} data={card}/>
  )

  return (
    <MainStyled className="main">
      {cards}
    </MainStyled>
  )
}

const MainStyled = styled.div`
  background: ${theme.colors.background_white};
  flex: 1; // ou vous pouvez faire ça : height: calc(95vh - 10vh);

  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  overflow-y : scroll;
  &::-webkit-scrollbar{
    display: none;
  }
`
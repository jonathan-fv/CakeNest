import styled from "styled-components"
import NavbarRightSide from "./NavbarRightSide"
import Logo from "../../reusable-ui/Logo"
import { theme } from "../../../theme"
import { refreshPage } from "../../../utils/window"
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react"

export default function Navbar({ username }) {

  const handleChange = () =>{
    notify();
    setbtnToggle(!btnToggle)
  }
  
  const notify = () => toast("Mode admin activé !",{ 
    position: "bottom-right",
    autoClose: 3000,
    theme: "dark"
  });

  const [btnToggle, setbtnToggle] = useState(false)

  return (
    <NavbarStyled>
      <Logo className="logo-order-page" onClick={() => refreshPage()} />
      <div className="ToastContainer">
            <button onClick={handleChange}>
            <div className="circle"></div>
            {btnToggle ? <p>Désactiver le mode admin</p>:<p>Activer le mode admin</p>}
            </button>
        </div>
      <NavbarRightSide username={username} />
    </NavbarStyled>
  )
}

const NavbarStyled = styled.nav`
  background: ${theme.colors.white};
  height: 10vh;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;

  border-top-left-radius: ${theme.borderRadius.extraRound};
  border-top-right-radius: ${theme.borderRadius.extraRound};

  .logo-order-page {
    cursor: pointer;
  }

  .ToastContainer{
    display:flex;
    align-items: center;
    margin-left: 550px;
  }

  .ToastContainer button{
    border: none;
    background-color: black;
    color: #67b6b9;
    padding: 2px 5px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    width: 260px;
  }

  .ToastContainer button .circle{
    width: 30px;
    height: 30px;
    background-color: #67b6b9;
    border-radius: 50%;
    margin-right: 15px;
  }
`;

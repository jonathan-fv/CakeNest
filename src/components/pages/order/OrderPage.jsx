import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Nav from "../../reusable-ui/Nav";
import { PiUserCircleFill } from "react-icons/pi";
import Logo from "../../reusable-ui/Logo";



export default function OrderPage(props) {
    const {username} = useParams();

    return (
        <GlobalContainerStyled>
            <ContainerStyled>
                <NavBarStyled>
                    <div>
                    <Logo/>
                    </div>
                    <BoxUserStyled>
                        <div className="box-infos">
                            <h1>Bonjour <span>{username}</span></h1>
                            <Link to={"/"} className="link">Se déconnecter</Link>
                        </div>
                        <div className="icone">
                            <PiUserCircleFill />
                        </div>
                    </BoxUserStyled>
                </NavBarStyled>
                <MainStyled>
                <p>Hello world</p>
                </MainStyled>
            </ContainerStyled>
        </GlobalContainerStyled>
    );
}

const GlobalContainerStyled = styled.div`
    background-color : #67b6b9;
    width: 100wh;
    height: 100vh;
    display: flex;
    justify-content: center;
    font-family : 'Open Sans';
`;

const ContainerStyled = styled.div`
    width: 90%;
    height: 90vh;
    background-color : white;
    margin: 30px auto;
    border-radius: 10px;
`;

const NavBarStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding : 0 20px;
    box-shadow: 0px 5px 15px -5px #000000;
`;

const BoxUserStyled = styled.div`
    display: flex;
    align-items: center;

    .box-infos{
        text-align: right;
    }
    .icone{
        font-size: 5rem;
        padding-left: 15px;
    }
    h1{
        margin-bottom: 10px;
    }
    h1 span{
        color:  #51a7e1;
        font-weight : 600;
    }
    .link{
        color : #a7a8ad;
        text-decoration : none;
        font-size : 13px;
    }
`;

const MainStyled = styled.div`
    margin : 30px;
`;


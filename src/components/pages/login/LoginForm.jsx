import { useState } from "react"
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../theme";
import cupcake from "../../../assets/images/cupcake.png"
import bg from "../../../assets/images/tarts.jpg"
import { PiUserCircleFill } from "react-icons/pi";
import { FaChevronRight } from "react-icons/fa";


function LoginForm() {
    const [value, setValue] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        if (value == ""){
            alert("Le champ Prénom est obligatoire")
        }
        else{
            navigate("/order", {state:{name:value}});
            
            setValue("")
        }
    }

    const handleChange = (event) => {
        const valueAfterChange = event.target.value
        setValue(valueAfterChange)
    }

    const navigate = useNavigate();

    const Container = styled.div`
        background-image: url(${bg});
        width: 100wh;
        height: 100vh;
    `;

    const Opacity = styled.div`
        background-color: rgba(0,0,0, .6);
        width: 100wh;
        height: 100vh;
    `;

    const BoxTitle = styled.div`
        display : flex;
        justify-content: center;
        align-items: center;
    `;
    const Title = styled.p`
        text-transform : uppercase;
        color : ${theme.colors.primary};
        text-align : center;
        margin-top : ${theme.spacing.xxl};
        margin-bottom : ${theme.spacing.xxl};
        font-size : ${theme.fonts.size.P6};
        padding-left : 5px;
        padding-right : 5px;
        font-family: 'Open Sans';
        letter-spacing : ${theme.spacing.xs}
    `;

    const SubTitle = styled.h2`
        font-family: "Pacifico";
        text-align : center;
        color : ${theme.colors.white};
        margin : ${theme.spacing.xl};
        font-size : ${theme.fonts.size.P6};
    `;
    const BoxColor = styled.div`
        width: 40%;
        height : 2px;
        background-color: ${theme.colors.primary};
        margin: 0 auto;
        opacity: 0.7
    `;
    const Paragraph = styled.p`
        font-family: "Pacifico";
        text-align : center;
        color : ${theme.colors.white};
        margin : ${theme.spacing.xxl};
        font-size : ${theme.fonts.size.P4};
    `;

    const BoxForm = styled.div`
        display: flex;
        justify-content: center;
        margin: 0 auto;
    `;

    const Form = styled.div`
        display: flex;
        flex-direction : column;
        gap: 20px;
    `;

    const BoxInput = styled.div`
        position: relative;
    `;
    const Input = styled.input`
        width: 550px;
        padding: 35px 0 35px 50px;
        font-family: 'Open Sans';
    `;

    const Icone = styled.div`
        position: absolute;
        background-color: ${theme.colors.white};
        top: 50%;
        transform : translateY(-50%);
        left: 10px;
        font-size: 30px;
        color : ${theme.colors.greySemiDark};
    `;

    const BtnColor = styled.button`
        height: 70px;
        background-color: ${theme.colors.primary};
        border : none;
        color : white;
        font-family: 'Open Sans';
        font-size : ${theme.fonts.size.P3};
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight : ${theme.fonts.weights.semiBold}
    `;


    return (
        <Container>
            <Opacity>
                <BoxTitle>
                    <Title>cake</Title> 
                    <img src={cupcake} style={{width: 90}}></img>
                    <Title>nest</Title>
                </BoxTitle>
                
                <SubTitle>Bienvenue chez nous !</SubTitle>
                <BoxColor></BoxColor>
                <Paragraph>Connectez vous</Paragraph>
                <BoxForm>
                    <Form action="submit" onSubmit={handleSubmit}>
                        <BoxInput>
                            <Icone>
                                <PiUserCircleFill />
                            </Icone>
                            <Input
                            type='text'
                            placeholder= "Entrer votre prémon"
                            onChange = {handleChange}
                            value={value}
                            ></Input>
                        </BoxInput>
                        <BtnColor><span style={{paddingRight:10}}>Mon espace</span><FaChevronRight /></BtnColor>
                        </Form>
                </BoxForm>
                
            </Opacity>
        </Container>
    )
}

export default LoginForm

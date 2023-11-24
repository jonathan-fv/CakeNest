import styled from "styled-components"


export default function RemoveButton({icon, name, onClick=() => {}}) {
    return (
        <ButtonStyled>
            <button onClick={onClick}>
                {name && name}
                {icon && icon}
            </button>
        </ButtonStyled>
    )
}

const ButtonStyled = styled.div`
    button{
        border: none;
        background-color: transparent;
    }
`;
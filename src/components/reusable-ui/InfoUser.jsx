import styled from 'styled-components'
import { fakeUser } from '../../fakeData/fakeUser'

export default function InfoUser() {
    
    
    return (
        <InfoUserStyled>
        {fakeUser.map(({id, address, code_postal, ville}) => {
            return(
                <div key={id}>
                    <p>{address}</p>
                    <div className='coordinate'>
                        <p>{code_postal}</p>
                        <p>{ville}</p>
                    </div>
                </div>
            )
        })}
        </InfoUserStyled>
    )

}

const InfoUserStyled = styled.div`
    .coordinate{
        display: flex;
    }
    .coordinate p{
        padding-right: 5px;
        margin: 0
    }
`;


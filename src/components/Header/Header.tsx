
import Image from 'next/image'
import styled from 'styled-components'

const HeaderStyled = styled.header`
    display: flex;
    justify-content: center;
    & .me {
        border-radius: 50%;
        border: 4px solid rgb(146, 202, 204) !important;
      }
`

const Header = () => {
    return (
        <HeaderStyled>
        <Image
          className="me"
          src="/its-a-me.jpeg"
          alt="Aitor Velasco"
          width="200"
          height="200"
        />
      </HeaderStyled>
    )
}

export default Header
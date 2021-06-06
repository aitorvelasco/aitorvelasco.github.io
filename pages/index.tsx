import { Header, Stage } from '../src/components'

import styled from 'styled-components'

const Main = styled.main`
    max-width: 1200px;
    margin: auto;
    padding: 16px 0;
`

const Home =() => {
  return (
    <Main>
      <Header />
      <Stage />
    </Main>
  )
}

export default Home
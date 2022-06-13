import { useContext, useState } from 'react'
import GlobalStyle from './styles/GlobalStyle'
import { ThemeContext } from './utils/contex'
import Header from './components/Header/Header'
import styled from 'styled-components'
import Screen from './components/Screen/Screen'
import Keyboard from './components/Keyboard/Keyboard'

const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  min-height: 750px;
  gap: 20px;
`

function App() {
  const { theme } = useContext(ThemeContext)
  const [display, setDisplay] = useState('')

  return (
    <Container>
      <GlobalStyle />
      <Header />

      <Screen display={display} setDisplay={setDisplay} />
      <Keyboard dispay={display} setDisplay={setDisplay} />
    </Container>
  )
}

export default App

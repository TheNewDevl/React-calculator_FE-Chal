import { useContext, useEffect, useRef, useState } from 'react'
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
  const [display, setDisplay] = useState(0)
  const [firstArg, setFirstArg] = useState()
  const [operator, setOperator] = useState()
  const [neg, setNeg] = useState(false)

  return (
    <Container>
      <GlobalStyle />
      <Header />

      <Screen display={display} operator={operator} neg={neg} />
      <Keyboard
        display={display}
        setDisplay={setDisplay}
        setFirst={setFirstArg}
        setOperator={setOperator}
        operator={operator}
        first={firstArg}
        neg={neg}
        setNeg={setNeg}
      />
    </Container>
  )
}

export default App

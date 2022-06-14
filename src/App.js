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
  const [secondArg, setSecondArg] = useState()
  const [result, setResult] = useState()
  const [operator, setOperator] = useState()

  useEffect(() => {
    const string = '222+2+2'
    console.log(string)

    console.log(string.split(/[0-9]/))
    console.log(string.split('+' || '-' || '/' || '*'))
  }, [])

  return (
    <Container>
      <GlobalStyle />
      <Header />

      <Screen
        display={display}
        setDisplay={setDisplay}
        first={setFirstArg}
        second={setSecondArg}
        result={setResult}
        operator={operator}
      />
      <Keyboard
        display={display}
        setDisplay={setDisplay}
        setFirst={setFirstArg}
        setSecond={setSecondArg}
        setResult={setResult}
        setOperator={setOperator}
        operator={operator}
        first={firstArg}
        second={secondArg}
      />
    </Container>
  )
}

export default App

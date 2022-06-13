import { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../utils/contex'

const ScreenSection = styled.section`
  width: 540px;
  height: 130px;
  background-color: ${({ palette }) => palette.bg.screen};
`

const Screen = ({ display }) => {
  const { palette, themeChoice } = useContext(ThemeContext)

  return (
    <ScreenSection palette={palette} choice={themeChoice}>
      <p>{display}</p>
    </ScreenSection>
  )
}

export default Screen

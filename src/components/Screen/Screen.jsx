import { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../utils/contex'

const ScreenSection = styled.section`
  width: 540px;
  height: 130px;
  background-color: ${({ palette }) => palette.bg.screen};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 30px;
  border-radius: 10px;
`
const Display = styled.p`
  color: ${({ palette, choice }) =>
    choice === 1 ? palette.text.second : palette.text.first};
  font-size: 55px;
`

const Screen = ({ display, operator }) => {
  const { palette, themeChoice } = useContext(ThemeContext)
  let result = display
  if (palette)
    return (
      <ScreenSection palette={palette} choice={themeChoice}>
        <Display id="display" palette={palette} choice={themeChoice}>
          {display}
        </Display>
        {operator && (
          <span
            style={{ color: 'white', fontSize: '30px' }}
            id="display"
            palette={palette}
            choice={themeChoice}
          >
            {operator}
          </span>
        )}
      </ScreenSection>
    )
}

export default Screen

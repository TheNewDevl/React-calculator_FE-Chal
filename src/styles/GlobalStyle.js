import { useContext } from 'react'

import { ThemeContext } from '../utils/contex'
import { createGlobalStyle } from 'styled-components'
import { lighten } from 'polished'

const StyledGlobalStyle = createGlobalStyle`
    * {
    font-family: 'League Spartan', sans-serif;
    box-sizing: border-box;
    }

    body {
        margin: 0;
        background-color: ${({ palette }) => palette.bg.main};
    }   
    header{
        color: ${({ palette, choice }) =>
          choice === 1 ? palette.text.second : palette.text.first};
    }
    .toggle__container{
        background-color: ${({ palette }) => palette.bg.togKeypad};
    }
    .toggle__radio{
        background-color: ${({ palette }) => palette.key.red};
    }
    .toggle__radio:hover{
        background-color: ${({ palette }) => lighten(0.2, palette.key.red)};

    }
`

export default function GlobalStyle() {
  const { palette, themeChoice } = useContext(ThemeContext)
  return <StyledGlobalStyle palette={palette} choice={themeChoice} />
}

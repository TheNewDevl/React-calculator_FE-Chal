import { lighten } from 'polished'
import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../utils/contex'

const KeyboardDiv = styled.div`
  padding: 25px;
  width: 540px;
  height: 480px;
  background-color: ${({ palette }) => palette.bg.togKeypad};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
`

const Key = styled.div`
  background-color: beige;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ palette }) => palette.key.primaryBg};
  font-size: ${({ palette }) => palette.fontSize};
  color: ${({ palette }) => palette.text.first};
  border-radius: 10px;
  box-shadow: 0px 4px 0px 0px ${({ palette }) => palette.key.primaryShadow};
  cursor: pointer;
  &:hover {
    background-color: ${({ palette }) => lighten(0.2, palette.key.primaryBg)};
  }
`

const KeyDel = styled(Key)`
  color: ${({ palette, choice }) =>
    choice === 3 ? palette.text.third : palette.text.second};
  background-color: ${({ palette }) => palette.key.secondaryBg};
  box-shadow: 0px 4px 0px 0px ${({ palette }) => palette.key.secondaryShadow};
  &:hover {
    background-color: ${({ palette }) => lighten(0.2, palette.key.secondaryBg)};
  }
`
const KeyReset = styled(Key)`
  grid-column: 1/3;
  color: ${({ palette, choice }) =>
    choice === 3 ? palette.text.third : palette.text.second};
  background-color: ${({ palette }) => palette.key.secondaryBg};
  box-shadow: 0px 4px 0px 0px ${({ palette }) => palette.key.secondaryShadow};
  &:hover {
    background-color: ${({ palette }) => lighten(0.2, palette.key.secondaryBg)};
  }
`
const KeyResult = styled(Key)`
  grid-column: 3/5;
  color: ${({ palette }) => palette.text.second};
  background-color: ${({ palette }) => palette.key.red};
  box-shadow: 0px 4px 0px 0px ${({ palette }) => palette.key.shadow};
  &:hover {
    background-color: ${({ palette }) => lighten(0.2, palette.key.red)};
  }
`
const Keyboard = ({ setDisplay }) => {
  const { palette, themeChoice } = useContext(ThemeContext)

  const handleNumbers = (e) => {
    const value = parseInt(e.currentTarget.textContent)
    setDisplay((d) => {
      return d + value
    })
  }

  const handleReset = (e) => {}
  return (
    <KeyboardDiv palette={palette}>
      <Key onClick={handleNumbers} palette={palette}>
        7
      </Key>
      <Key onClick={handleNumbers} palette={palette}>
        8
      </Key>
      <Key onClick={handleNumbers} palette={palette}>
        9
      </Key>
      <KeyDel choice={themeChoice} palette={palette}>
        DEL
      </KeyDel>

      <Key onClick={handleNumbers} palette={palette}>
        4
      </Key>
      <Key onClick={handleNumbers} palette={palette}>
        5
      </Key>
      <Key onClick={handleNumbers} palette={palette}>
        6
      </Key>
      <Key palette={palette}>+</Key>

      <Key onClick={handleNumbers} palette={palette}>
        1
      </Key>
      <Key onClick={handleNumbers} palette={palette}>
        2
      </Key>
      <Key onClick={handleNumbers} palette={palette}>
        3
      </Key>
      <Key palette={palette}>-</Key>

      <Key palette={palette}>.</Key>
      <Key onClick={handleNumbers} palette={palette}>
        0
      </Key>
      <Key palette={palette}>/</Key>
      <Key palette={palette}>x</Key>
      <KeyReset onClick={handleReset} choice={themeChoice} palette={palette}>
        RESET
      </KeyReset>
      <KeyResult palette={palette}>=</KeyResult>
    </KeyboardDiv>
  )
}

export default Keyboard

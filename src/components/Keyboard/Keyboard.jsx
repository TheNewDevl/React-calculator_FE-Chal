import { lighten } from 'polished'
import React, { useContext, useState } from 'react'
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
  border-radius: 10px;
`
const Key = styled.button`
  border: none;
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
const Keyboard = ({
  display,
  setDisplay,
  setOperator,
  setFirst,
  operator,
  first,
  second,
}) => {
  const { palette, themeChoice } = useContext(ThemeContext)
  const [result, setResult] = useState(false)
  const [neg, setNeg] = useState(false)

  const handleNumbers = (e, neg) => {
    const keyValue = e.currentTarget.textContent

    if (result) {
      setFirst(display)
      setDisplay('')
      setResult(false)
    }
    if (operator && !first) {
      setFirst(display)
      if (neg) {
        setDisplay('')
        setNeg(false)
      } else {
        setDisplay('')
      }
    }
    if (display === 0) {
      setDisplay(keyValue)
    } else if (display === '-0') {
      setDisplay((d) => `-${keyValue}`)
    } else {
      setDisplay((d) => d + `${keyValue}`)
    }
  }

  const handleReset = (e) => {
    setDisplay(0)
    setOperator('')
    setFirst('')
  }

  const handleOperator = (e) => {
    const keyValue = e.currentTarget.textContent
    setNeg(false)

    if (keyValue === '-') {
      if (display === 0) {
        setDisplay('-0')
      } else if (keyValue === operator && display.slice(0, 1) !== '-') {
        setNeg(true)
        if (neg && first && operator && display !== 0) {
          setOperator(keyValue)
          handleResult()
        }
      } else if (first && operator && display !== 0) {
        setOperator(keyValue)
        handleResult()
      } else {
        setOperator(keyValue)
      }
    } else if (first && operator && display !== 0) {
      setOperator(keyValue)
      handleResult()
    } else if (operator === keyValue) {
      return
    } else {
      setOperator(keyValue)
    }
  }

  const handleDecimal = (e) => {
    if (display === 0 || display === '-0') {
      setDisplay((d) => d + '.')
      return
    }

    if (display.includes('.')) return
    setDisplay((d) => d + '.')
  }

  const calculate = (first, operator, display) => {
    if (operator === '+') return parseFloat(first) + parseFloat(display)
    if (operator === '-') return parseFloat(first) - parseFloat(display)
    if (operator === 'x') return parseFloat(first) * parseFloat(display)
    if (operator === '/') return parseFloat(first) / parseFloat(display)
  }

  const handleResult = (e) => {
    let result = ''
    if (first && operator && display !== 0) {
      result = calculate(first, operator, display)
      setDisplay(String(result))
      setFirst(String(result))
      setResult(true)
    }
    if (e?.currentTarget.textContent === '=') {
      setOperator('')
    }
  }

  return (
    <KeyboardDiv palette={palette}>
      <Key id="seven" onClick={handleNumbers} palette={palette}>
        7
      </Key>
      <Key id="eight" onClick={handleNumbers} palette={palette}>
        8
      </Key>
      <Key id="nine" onClick={handleNumbers} palette={palette}>
        9
      </Key>
      <KeyDel choice={themeChoice} palette={palette}>
        DEL
      </KeyDel>

      <Key id="four" onClick={handleNumbers} palette={palette}>
        4
      </Key>
      <Key id="five" onClick={handleNumbers} palette={palette}>
        5
      </Key>
      <Key id="six" onClick={handleNumbers} palette={palette}>
        6
      </Key>
      <Key id="add" onClick={handleOperator} palette={palette}>
        +
      </Key>

      <Key id="one" onClick={handleNumbers} palette={palette}>
        1
      </Key>
      <Key id="two" onClick={handleNumbers} palette={palette}>
        2
      </Key>
      <Key id="three" onClick={handleNumbers} palette={palette}>
        3
      </Key>
      <Key id="subtract" onClick={handleOperator} palette={palette}>
        -
      </Key>

      <Key id="decimal" onClick={handleDecimal} palette={palette}>
        .
      </Key>
      <Key id="zero" onClick={handleNumbers} palette={palette}>
        0
      </Key>
      <Key id="divide" onClick={handleOperator} palette={palette}>
        /
      </Key>
      <Key id="multiply" onClick={handleOperator} palette={palette}>
        x
      </Key>
      <KeyReset
        id="clear"
        onClick={handleReset}
        choice={themeChoice}
        palette={palette}
      >
        RESET
      </KeyReset>
      <KeyResult id="equals" onClick={handleResult} palette={palette}>
        =
      </KeyResult>
    </KeyboardDiv>
  )
}

export default Keyboard

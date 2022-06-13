import { createContext, useState } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [themeChoice, setThemeChoice] = useState(1)

  const t1 = {
    bg: {
      main: 'hsl(222, 26%, 31%)',
      togKeypad: 'hsl(223, 31%, 20%)',
      screen: 'hsl(224, 36%, 15%)',
    },
    key: {
      secondaryBg: 'hsl(225, 21%, 49%)',
      secondaryShadow: 'hsl(224, 28%, 35%)',

      red: 'hsl(6, 63%, 50%)',
      shadow: ' hsl(6, 70%, 34%)',

      primaryBg: 'hsl(30, 25%, 89%)',
      primaryShadow: 'hsl(28, 16%, 65%)',
    },
    text: {
      first: 'hsl(221, 14%, 31%)',
      second: 'hsl(0, 0%, 100%)',
    },
    fontSize: '32px',
  }

  const t2 = {
    bg: {
      main: ' hsl(0, 0%, 90%)',
      togKeypad: 'hsl(0, 5%, 81%)',
      screen: 'hsl(0, 0%, 93%)',
    },
    key: {
      secondaryBg: 'hsl(185, 42%, 37%)',
      secondaryShadow: 'hsl(185, 58%, 25%)',

      red: 'hsl(25, 98%, 40%)',
      shadow: ' hsl(25, 99%, 27%)',

      primaryBg: 'hsl(45, 7%, 89%)',
      primaryShadow: 'hsl(35, 11%, 61%)',
    },
    text: {
      first: 'hsl(60, 10%, 19%)',
      second: 'hsl(0, 0%, 100%)',
    },
    fontSize: '32px',
  }

  const t3 = {
    bg: {
      main: 'hsl(268, 75%, 9%)',
      togKeypad: 'hsl(268, 71%, 12%)',
      screen: 'hsl(268, 71%, 12%)',
    },
    key: {
      secondaryBg: 'hsl(281, 89%, 26%)',
      secondaryShadow: 'hsl(285, 91%, 52%)',

      red: 'hsl(176, 100%, 44%)',
      shadow: ' hsl(177, 92%, 70%)',

      primaryBg: 'hsl(268, 47%, 21%)',
      primaryShadow: 'hsl(290, 70%, 36%)',
    },
    text: {
      first: 'hsl(52, 100%, 62%)',
      second: 'hsl(198, 20%, 13%)',
      third: 'hsl(0,0%, 100%)',
    },
    fontSize: '32px',
  }
  const palette =
    themeChoice === 1 ? t1 : themeChoice === 2 ? t2 : themeChoice === 3 && t3

  return (
    <ThemeContext.Provider value={{ themeChoice, setThemeChoice, palette }}>
      {children}
    </ThemeContext.Provider>
  )
}

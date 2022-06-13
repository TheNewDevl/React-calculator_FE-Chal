import { useContext, useState } from 'react'
import { ThemeContext } from '../../utils/contex'
import './Header.scss'

const Header = () => {
  const { setThemeChoice } = useContext(ThemeContext)
  const [translate, setTranslate] = useState('translateX(0px)')

  const handleTheme = () => {
    if (translate === 'translateX(0px)') {
      setThemeChoice(2)
      setTranslate('translateX(19px)')
    } else if (translate === 'translateX(19px)') {
      setThemeChoice(3)
      setTranslate('translateX(38px)')
    } else if (translate === 'translateX(38px)') {
      setThemeChoice(1)
      setTranslate('translateX(0px)')
    }
  }

  return (
    <header>
      <h1>calc</h1>
      <div className="themes">
        <div className="toggle__items__container">
          <span className="toggle__items">1</span>
          <span className="toggle__items">2</span>
          <span className="toggle__items">3</span>
        </div>

        <div className="toggle">
          <p className="toggle__label">THEME</p>
          <div onClick={handleTheme} className="toggle__container">
            <div
              className="toggle__radio"
              style={{
                transform: translate,
              }}
            ></div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

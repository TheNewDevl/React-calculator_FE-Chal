import { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../utils/contex'

const ScreenSection = styled.section`
  width: 100%;
  max-width: 540px;
  height: 130px;
  background-color: ${({ palette }) => palette.bg.screen};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 30px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  @media screen and (max-width: 540px) {
    height: 85px;
  }
`
const Display = styled.p`
  color: ${({ palette, choice }) =>
    choice === 1 ? palette.text.second : palette.text.first};
  font-size: 55px;
  @media screen and (max-width: 540px) {
    font-size: 40px;
  }
`

const Operator = styled.span`
  color: #fff;
  font-size: 55px;
  position: absolute;
  left: 30px;
`

const Neg = styled.span`
  color: #fff;
  font-size: 15px;
  position: absolute;
  bottom: 20px;
`
const Screen = ({ display, operator, neg }) => {
  const { palette, themeChoice } = useContext(ThemeContext)
  if (palette)
    return (
      <ScreenSection palette={palette} choice={themeChoice}>
        <Display /*  id="display" */ palette={palette} choice={themeChoice}>
          {display}
        </Display>
        {operator && <Operator id="display">{operator}</Operator>}
        {neg && <Neg id="display">-</Neg>}
      </ScreenSection>
    )
}

export default Screen

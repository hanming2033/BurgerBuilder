import * as React from 'react'
import ToolBarWrapper from '../../UI-Elements/ToolBarWrapper'
import Nav from '../../UI-Elements/Nav'
import Logo from '../Logo/Logo'
import NavigationItems from './NavigationItems'

interface ITollBarProps {
  _?: string
}

const ToolBar: React.SFC<ITollBarProps> = props => {
  return (
    <ToolBarWrapper>
      <div>MENU</div>
      <Logo />
      <Nav>
        <NavigationItems />
      </Nav>
    </ToolBarWrapper>
  )
}

export default ToolBar

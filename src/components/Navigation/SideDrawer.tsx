import * as React from 'react'
import Logo from '../Logo/Logo'
import NavigationItems from './NavigationItems'
import Nav from '../../UI-Elements/Nav'
import styled from '../../my-styled-components'

interface ISideDrawerProps {
  showMenu?: boolean
}

const Wrapper = styled.div`
  position: fixed;
  width: 280px;
  max-width: 70%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 400;
  background-color: white;
  padding: 32px 16px;
  transform: ${(p: { showMenu?: boolean }) => (p.showMenu ? 'translateX(0)' : 'translateY(-100%)')};
  transition: transform 0.3s ease-out;

  @media (min-width: 500px) {
    display: none;
  }
`

const SideDrawer: React.SFC<ISideDrawerProps> = props => {
  return (
    <Wrapper showMenu={props.showMenu}>
      <Logo height="50px" />
      <Nav>
        <NavigationItems />
      </Nav>
    </Wrapper>
  )
}

export default SideDrawer

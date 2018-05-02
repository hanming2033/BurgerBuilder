import * as React from 'react'
import styled from 'styled-components'
import TopNav from '../done-Navigation/TopNav'
import SideDrawer from '../done-Navigation/SideDrawer'

const MainContainer = styled.main`
  margin-top: 70px;
`

interface ILayoutState {
  showSideMenu: boolean
}

class Layout extends React.Component<{}, ILayoutState> {
  public state = {
    showSideMenu: false
  }

  public toggleSideMenu = () => {
    this.setState(prevState => ({ showSideMenu: !prevState.showSideMenu }))
  }

  public render() {
    return (
      <>
        <TopNav />
        <SideDrawer />
        <MainContainer>{this.props.children}</MainContainer>
      </>
    )
  }
}

export default Layout

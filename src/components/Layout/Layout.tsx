import * as React from 'react'
import styled from 'styled-components'
import TopNav from '../Navigation/TopNav'
import SideDrawer from '../Navigation/SideDrawer'

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
        <TopNav openSideMenu={this.toggleSideMenu} />
        <SideDrawer showMenu={this.state.showSideMenu} closeSideMenu={this.toggleSideMenu} />
        <MainContainer>{this.props.children}</MainContainer>
      </>
    )
  }
}

export default Layout

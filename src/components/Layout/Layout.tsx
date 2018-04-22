import * as React from 'react'
import styled from 'styled-components'
import ToolBar from '../Navigation/Toolbar'
import SideDrawer from '../Navigation/SideDrawer'

interface IlayoutProps {
  name?: string
}

const MainContainer = styled.main`
  margin-top: 70px;
`

const layout: React.SFC<IlayoutProps> = props => {
  return (
    <>
      <ToolBar />
      <SideDrawer showMenu />
      <MainContainer>{props.children}</MainContainer>
    </>
  )
}

export default layout

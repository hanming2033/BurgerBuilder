import * as React from 'react'
// import ToolBarWrapper from '../../UI-Elements/ToolBarWrapper'
// import Nav from '../../UI-Elements/Nav'
import Logo from '../Logo/Logo'
// import NavigationItems from './NavigationItems'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import styled from 'styled-components'

interface ITopNavProps {
  openSideMenu: () => void
}

const EmptyDiv = styled.div`
  margin: auto;
`

const ResponsiveButton = styled(Button)`
  &&& {
    @media (max-width: 500px) {
      display: none;
    }
  }
`

const TopNav: React.SFC<ITopNavProps> = props => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton color="inherit" aria-label="Menu" onClick={props.openSideMenu}>
          <MenuIcon />
        </IconButton>

        <Typography variant="title" color="inherit">
          Burgerrrr
        </Typography>
        <Logo height="40px" />
        <EmptyDiv />
        <ResponsiveButton color="inherit">Burger Builder</ResponsiveButton>
        <ResponsiveButton color="inherit">Cart</ResponsiveButton>
      </Toolbar>
    </AppBar>
  )
}

export default TopNav

import * as React from 'react'
import Logo from '../Logo/Logo'
// import NavigationItems from './NavigationItems'
// import Nav from '../../UI-Elements/Nav'
// import styled from 'styled-components'

import Drawer from 'material-ui/Drawer'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import Icon from 'material-ui/Icon'

interface ISideDrawerProps {
  showMenu?: boolean
  closeSideMenu: () => void
}

const sideList = (
  <div>
    <List component="nav">
      <Logo height="60px" />
      <ListItem button>
        <ListItemIcon>
          <Icon>create</Icon>
        </ListItemIcon>
        <ListItemText primary="Burger Builder" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <Icon>shopping_cart</Icon>
        </ListItemIcon>
        <ListItemText primary="Cart" />
      </ListItem>
    </List>
  </div>
)

const SideDrawer: React.SFC<ISideDrawerProps> = props => {
  return (
    <Drawer open={props.showMenu} onClose={props.closeSideMenu}>
      <div tabIndex={0} role="button" onClick={props.closeSideMenu} onKeyDown={props.closeSideMenu}>
        {sideList}
      </div>
    </Drawer>
  )
}

export default SideDrawer

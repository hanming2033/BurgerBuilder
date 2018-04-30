import * as React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

interface INavigationItemsProps {
  active?: boolean
}

const NavigationItem = styled.li`
  margin: 0;
  display: flex;
  height: 100%;
  align-items: center;

  a {
    color: white;
    text-decoration: none;
    height: 100%;
    padding: 16px 10px;
    border-bottom: 4px solid transparent;
    display: block;

    &:hover,
    &:active {
      background-color: #8f5c2c;
      border-bottom: 4px solid #40a4c8;
      color: white;
    }
  }
`

const NavWrapper = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  height: 100%;
`

const NavigationItems: React.SFC<INavigationItemsProps> = props => {
  return (
    <NavWrapper>
      <NavigationItem>
        <NavLink activeStyle={{ color: 'pink' }} style={{ color: 'white', textDecoration: 'none' }} to="/burgerbuilder">
          Build Burger
        </NavLink>
      </NavigationItem>
      <NavigationItem>
        <NavLink activeStyle={{ color: 'pink' }} style={{ color: 'white', textDecoration: 'none' }} to="/orders">
          Orders
        </NavLink>
      </NavigationItem>
    </NavWrapper>
  )
}

export default NavigationItems

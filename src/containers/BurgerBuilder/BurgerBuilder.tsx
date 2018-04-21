import * as React from 'react'
import Burger from '../../components/Burger/Burger'

export interface IBurgerBuilderProps {
  a?: string
}

export interface IBurgerBuilderState {
  ingredients: {
    salad?: number
    bacon?: number
    cheese?: number
    meat?: number
  }
}

export default class BurgerBuilder extends React.Component<IBurgerBuilderProps, IBurgerBuilderState> {
  public state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 3,
      meat: 1
    }
  }

  public render() {
    return (
      <>
        <Burger ingredients={this.state.ingredients} />
        <div>Build Control</div>
      </>
    )
  }
}

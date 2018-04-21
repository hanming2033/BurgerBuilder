import * as React from 'react'
import Burger from '../components/Burger/Burger'
import BuilControls from '../components/Burger/BuildControls/BuildControls'
import { ingredientType } from '../components/Burger/BurgerIngredient'
import Modal from '../UI-Elements/Modal'
import OrderSummary from '../components/Burger/OrderSummary'

export interface IBurgerBuilderProps {
  a?: string
}

export interface IBurgerBuilderState {
  ingredients: {
    salad: number
    bacon: number
    cheese: number
    meat: number
  }
  totalPrice: number
  purchasing?: boolean
}

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.7,
  meat: 1.5,
  bacon: 1.1
}

export const MAX_NUMBER = {
  salad: 2,
  cheese: 2,
  meat: 2,
  bacon: 2
}

export const MIN_NUMBER = {
  salad: 1,
  cheese: 0,
  meat: 1,
  bacon: 0
}

export default class BurgerBuilder extends React.Component<IBurgerBuilderProps, IBurgerBuilderState> {
  public state = { ingredients: { salad: 1, bacon: 1, cheese: 1, meat: 1 }, totalPrice: 6.8, purchasing: false }

  public handleAddIngredient = (igType: ingredientType) => {
    this.setState(prevState => {
      const newState = { ...prevState }
      if (newState.ingredients[igType] < MAX_NUMBER[igType]) {
        newState.ingredients[igType]++
        newState.totalPrice = newState.totalPrice + INGREDIENT_PRICES[igType]
      }
      return newState
    })
  }

  public handleRemoveIngredient = (igType: ingredientType) => {
    this.setState(prevState => {
      const newState = { ...prevState }
      if (newState.ingredients[igType] > 0 && newState.ingredients[igType] > MIN_NUMBER[igType]) {
        newState.ingredients[igType]--
        newState.totalPrice = newState.totalPrice - INGREDIENT_PRICES[igType]
      }
      return newState
    })
  }

  public toglePurchase = () => {
    this.setState(prevState => {
      const prevPurchasing = prevState.purchasing
      return { purchasing: !prevPurchasing }
    })
  }

  public render() {
    return (
      <>
        <Modal purchasing={this.state.purchasing} togglePurchase={this.toglePurchase}>
          <OrderSummary ingredients={this.state.ingredients} totalPrice={this.state.totalPrice} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuilControls
          purchasing={this.state.purchasing}
          toglePurchase={this.toglePurchase}
          totalPrice={this.state.totalPrice}
          ingredients={this.state.ingredients}
          addIngredient={(t: ingredientType) => this.handleAddIngredient(t)}
          removeIngredient={(t: ingredientType) => this.handleRemoveIngredient(t)}
        />
      </>
    )
  }
}

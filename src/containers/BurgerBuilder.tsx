import * as React from 'react'
import Burger from '../components/Burger/Burger'
import BuilControls from '../components/Burger/BuildControls/BuildControls'
import { ingredientType } from '../components/Burger/BurgerIngredient'
import Modal from '../UI-Elements/Modal'
import OrderSummary from '../components/Burger/OrderSummary'
import orderAxios from '../axios-order'
import withErrorHandler from '../withErrorHandler'
import { CircularProgress } from 'material-ui/Progress'
import { IburgerProps } from '../components/Burger/Burger'
import { RouteComponentProps } from 'react-router-dom'

export interface IBurgerBuilderProps {
  _?: string
}

export interface IBurgerBuilderState extends IburgerProps {
  totalPrice: number
  purchasing?: boolean
  loading: boolean
  error?: boolean
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

class BurgerBuilder extends React.Component<IBurgerBuilderProps & RouteComponentProps<{}>, IBurgerBuilderState> {
  public state = {
    ingredients: { salad: 0, bacon: 0, cheese: 0, meat: 0 },
    totalPrice: 6.8,
    purchasing: false,
    loading: false,
    error: false
  }

  public componentDidMount() {
    orderAxios
      .get('https://react-burger-builder-8b532.firebaseio.com/ingredients.json')
      .then(res => {
        this.setState({ ingredients: res.data })
        return res
      })
      .catch(err => {
        this.setState({ error: true })
      })
  }

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

  public togglePurchase = () => {
    this.setState(prevState => {
      const prevPurchasing = prevState.purchasing
      return { purchasing: !prevPurchasing }
    })
  }

  public handlePurchaseContinue = () => {
    // this.setState({ loading: true })
    const queryParam = []
    for (const i in this.state.ingredients) {
      if (this.state.ingredients.hasOwnProperty(i)) {
        queryParam.push(`${i}=${this.state.ingredients[i]}`)
      }
    }
    queryParam.push(`price=${this.state.totalPrice}`)
    const queryString = queryParam.join('&')
    this.props.history.push({ pathname: '/cart', search: `?${queryString}` })
  }

  public render() {
    let burger = (
      <>
        <Burger ingredients={this.state.ingredients} />
        <BuilControls
          loading={this.state.loading}
          purchasing={this.state.purchasing}
          toglePurchase={this.togglePurchase}
          totalPrice={this.state.totalPrice}
          ingredients={this.state.ingredients}
          addIngredient={(t: ingredientType) => this.handleAddIngredient(t)}
          removeIngredient={(t: ingredientType) => this.handleRemoveIngredient(t)}
        />
      </>
    )
    burger = this.state.ingredients.meat === 0 ? <CircularProgress size={50} /> : burger
    burger = this.state.error ? <p>App Failed. Mother Fucker!!</p> : burger

    return (
      <>
        <Modal purchasing={this.state.purchasing} togglePurchase={this.togglePurchase} loading={this.state.loading}>
          <OrderSummary
            ingredients={this.state.ingredients}
            totalPrice={this.state.totalPrice}
            continuePurchase={this.handlePurchaseContinue}
            cancelPurchase={this.togglePurchase}
            loading={this.state.loading}
          />
        </Modal>
        {burger}
      </>
    )
  }
}

export default withErrorHandler(BurgerBuilder, orderAxios)

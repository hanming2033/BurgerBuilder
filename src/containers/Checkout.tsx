import * as React from 'react'
import CheckoutSummary from '../components/Order/CheckoutSummary'
import { IburgerProps } from '../components/Burger/Burger'
import { RouteComponentProps } from 'react-router-dom'
import { Route } from 'react-router-dom'
import ContactInfo from './ContactInfor'
export interface ICheckOutProps {
  _?: string
}

export interface ICheckOutState {
  totalPrice: number
}

export default class CheckOut extends React.Component<ICheckOutProps & RouteComponentProps<{}>, ICheckOutState & IburgerProps> {
  // Checkout summary form
  // Display burger
  // with some controls
  public state = {
    ingredients: {
      salad: 1,
      meat: 1,
      cheese: 1,
      bacon: 1
    },
    totalPrice: 0
  }

  public componentDidMount() {
    const query = new URLSearchParams(this.props.location.search)
    const saladCount = (query.get('salad') !== null ? query.get('salad') : 0) as number
    const meatCount = (query.get('salad') !== null ? query.get('meat') : 0) as number
    const cheeseCount = (query.get('salad') !== null ? query.get('cheese') : 0) as number
    const baconCount = (query.get('salad') !== null ? query.get('bacon') : 0) as number
    const price = (query.get('price') !== null ? query.get('price') : 0) as number
    this.setState({ ingredients: { salad: saladCount, meat: meatCount, cheese: cheeseCount, bacon: baconCount }, totalPrice: price })
  }

  public handleCancelCheckout = () => {
    this.props.history.goBack()
  }

  public handleContinueCheckout = () => {
    this.props.history.replace({ pathname: `${this.props.match.url}/contact-info` })
  }

  public render() {
    return (
      <div>
        <CheckoutSummary
          cancelCheckout={this.handleCancelCheckout}
          continueCheckout={this.handleContinueCheckout}
          ingredients={this.state.ingredients}
        />
        <Route
          path={`${this.props.match.path}/contact-info`}
          render={() => <ContactInfo ingredients={this.state.ingredients} totalPrice={this.state.totalPrice} {...this.props} />}
        />
      </div>
    )
  }
}

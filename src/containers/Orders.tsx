import * as React from 'react'
import Order from '../components/Order/Order'
import orderAxios from '../axios-order'
import { IburgerProps } from '../components/Burger/Burger'

export interface IOrdersProps {
  _?: string
}

export interface IorderProps {
  id: string
  customer: {
    adress: {
      country: string
      postalCode: string
      street: string
    }
    name: string
    email: string
  }
  ingredients: IburgerProps
  deliveryMethod: string
}

export interface IOrdersState {
  orders: IorderProps[]
  loading: boolean
}

export default class Orders extends React.Component<IOrdersProps, IOrdersState> {
  public state = {
    orders: [],
    loading: true
  }

  public componentDidMount() {
    orderAxios
      .get('/orders.json')
      .then(res => {
        // tslint:disable-next-line:no-console
        console.log(res.data)

        const orders = Object.keys(res.data).map(order => ({ ...res.data[order], id: order }))
        this.setState({ loading: false, orders })
        // tslint:disable-next-line:no-console
        // console.log(orders)
      })
      .catch(err => {
        this.setState({ loading: false })
      })
  }

  public render() {
    return (
      <div>
        <Order />
        <Order />
      </div>
    )
  }
}

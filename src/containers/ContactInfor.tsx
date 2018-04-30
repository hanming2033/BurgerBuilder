import * as React from 'react'
import Button from 'material-ui/Button/Button'
import styled from 'styled-components'
import { IburgerProps } from '../components/Burger/Burger'
import orderAxios from '../axios-order'
import { LinearProgress } from 'material-ui/Progress'
import { RouteComponentProps } from 'react-router-dom'

export interface IContactInfoProps {
  totalPrice: number
}

export interface IContactInfoState {
  name: string
  email: string
  address: {
    street: string
    postalCode: string
  }
  loading: boolean
}

const Wrapper = styled.div`
  margin: 20px auto;
  width: 80%;
  text-align: center;
  @media (min-width: 600px) {
    width: 500px;
  }
`
const ProgressBar = styled(LinearProgress).attrs({
  color: 'secondary'
})`
  margin-top: 10px;
`

export default class ContactInfo extends React.Component<IContactInfoProps & IburgerProps & RouteComponentProps<{}>, IContactInfoState> {
  public state = { name: '', email: '', address: { street: '', postalCode: '' }, loading: false }

  public handlerOrder = (e: React.MouseEvent<HTMLElement>) => {
    this.setState({ loading: true })
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      customer: {
        name: 'Zheng Hanming',
        address: { street: '468C Admiralty Drive', postalCode: '234233', country: 'Singapore' },
        email: 'hanming@outlook.sg'
      },
      deliveryMethod: 'Singpost'
    } // should calculate on server
    orderAxios
      .post('orders.json', order)
      .then(res => {
        this.setState({ loading: false })
        this.props.history.push('/')
      })
      .catch(err => {
        this.setState({ loading: false })
      })
  }

  public render() {
    return (
      <Wrapper>
        {this.state.loading && <ProgressBar />}

        <h4>Enter you contact information</h4>
        <form>
          <input type="text" name="name" placeholder="Your Name" />
          <input type="email" name="email" placeholder="Your Email" />
          <input type="text" name="street" placeholder="Street" />
          <input type="text" name="postal" placeholder="Postal Code" />
          <Button variant="raised" color="secondary" onClick={e => this.handlerOrder(e)}>
            Order
          </Button>
        </form>
      </Wrapper>
    )
  }
}

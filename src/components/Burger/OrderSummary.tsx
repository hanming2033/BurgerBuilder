import * as React from 'react'
import { IBurgerBuilderState } from '../../containers/BurgerBuilder'
import styled from '../../my-styled-components'

interface IOrderSummaryProps extends IBurgerBuilderState {
  tmp?: string
}

const IngredientListItem = styled.li`
  list-style: none;
`

const IngredientName = styled.span`
  text-transform: capitalize;
`

const OrderSummary: React.SFC<IOrderSummaryProps> = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(ingredient => (
    <IngredientListItem key={ingredient}>
      <IngredientName>{ingredient}</IngredientName> : {props.ingredients[ingredient]}
    </IngredientListItem>
  ))

  return (
    <>
      <h3>Your Order : ${props.totalPrice.toFixed(2)}</h3>
      <p>A delicious burger with the below ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to Checkout</p>
    </>
  )
}

export default OrderSummary

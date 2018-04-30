import * as React from 'react'
import Burger, { IburgerProps } from '../Burger/Burger'
import Button from 'material-ui/Button/Button'
import styled from 'styled-components'

interface ICheckoutSummaryProps {
  cancelCheckout: () => void
  continueCheckout: () => void
}

const Wrapper = styled.div`
  text-align: center;
  width: 80%;
  margin: auto;

  @media (min-width: 600px) {
    width: 500px;
  }
`

const BurgerWrapper = styled.div`
  width: 100%;
  margin: auto;
  text-align: center;
`

const CheckoutSummary: React.SFC<ICheckoutSummaryProps & IburgerProps> = props => {
  return (
    <Wrapper>
      <h1>We hope it tests well!</h1>
      <BurgerWrapper>
        <Burger ingredients={props.ingredients} />
      </BurgerWrapper>
      <Button onClick={props.cancelCheckout} color="primary">
        CANCEL
      </Button>
      <Button onClick={props.continueCheckout} color="secondary">
        CONTINUE
      </Button>
    </Wrapper>
  )
}

export default CheckoutSummary

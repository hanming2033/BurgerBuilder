import * as React from 'react'
import Burger, { IburgerProps } from '../done-Burger/Burger'
import styled from 'styled-components'
import { Button } from 'antd'

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

      <Button onClick={props.cancelCheckout} type="primary" ghost>
        CANCEL
      </Button>

      <Button onClick={props.continueCheckout} type="danger" ghost>
        CONTINUE
      </Button>
    </Wrapper>
  )
}

export default CheckoutSummary

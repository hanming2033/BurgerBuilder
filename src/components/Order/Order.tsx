import * as React from 'react'
import styled from 'styled-components'

interface IOrderProps {
  _?: string
}

const Wrapper = styled.div`
  width: 80%;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 10px;
  margin: 10px auto;
  box-sizing: border-box;
`

const Order: React.SFC<IOrderProps> = props => {
  return (
    <Wrapper>
      <p>Ingredients: Salad ()</p>
      <p>Price: </p>
    </Wrapper>
  )
}

export default Order

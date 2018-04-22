import * as React from 'react'
import styled from 'styled-components'
import BackDrop from './Backdrop'

interface ImodalProps {
  purchasing: boolean
  togglePurchase: () => void
}

const Wrapper = styled.div`
  transform: ${(props: Partial<ImodalProps>) => (props.purchasing ? 'translateY(0)' : 'translateY(-100vh)')};
  opacity: ${(props: Partial<ImodalProps>) => (props.purchasing ? '1' : '0')};
  position: fixed;
  position: fixed;
  z-index: 500;
  background-color: white;
  width: 70%;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px black;
  padding: 16px;
  left: 15%;
  top: 30%;
  box-sizing: border-box;
  transition: all 0.3s ease-out;
  @media (min-width: 600px) {
    width: 500px;
    left: calc(50% - 250px);
  }
`

const modal: React.SFC<ImodalProps> = props => {
  return (
    <>
      <Wrapper purchasing={props.purchasing}>{props.children}</Wrapper>
      <BackDrop show={props.purchasing} hide={props.togglePurchase} />
    </>
  )
}

export default modal

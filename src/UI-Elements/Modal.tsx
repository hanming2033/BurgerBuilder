import * as React from 'react'
import styled from '../my-styled-components'

interface ImodalProps {
  tmp?: string
}

const Wrapper = styled.div`
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
  return <Wrapper>{props.children}</Wrapper>
}

export default modal

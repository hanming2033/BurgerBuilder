import * as React from 'react'
import styled from '../my-styled-components'

interface IBackDropProps {
  show: boolean
  hide: () => void
}

const Background = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 400;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
`

const BackDrop: React.SFC<IBackDropProps> = props => (props.show ? <Background onClick={props.hide} /> : null)

export default BackDrop

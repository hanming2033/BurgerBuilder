import * as React from 'react'
import styled from 'styled-components'
import BackDrop from './Backdrop'

interface IModalProps {
  purchasing: boolean
  togglePurchase: () => void
  loading: boolean
}

const Wrapper = styled.div`
  transform: ${(props: Partial<IModalProps>) => (props.purchasing ? 'translateY(0)' : 'translateY(-100vh)')};
  opacity: ${(props: Partial<IModalProps>) => (props.purchasing ? '1' : '0')};
  position: fixed;
  position: fixed;
  z-index: 500;
  background-color: white;
  width: 70%;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px black;
  padding: 50px;
  left: 15%;
  top: 30%;
  box-sizing: border-box;
  transition: all 0.3s ease-out;
  @media (min-width: 600px) {
    width: 500px;
    left: calc(50% - 250px);
  }
`

class Modal extends React.Component<IModalProps, {}> {
  public shouldComponentUpdate(nextProps: IModalProps) {
    return nextProps.purchasing !== this.props.purchasing || nextProps.loading !== this.props.loading
  }

  public render() {
    return (
      <>
        <Wrapper purchasing={this.props.purchasing}>{this.props.children}</Wrapper>
        <BackDrop show={this.props.purchasing} hide={this.props.togglePurchase} />
      </>
    )
  }
}

export default Modal

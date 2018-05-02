import * as React from 'react'
import styled from 'styled-components'
// BurgerLogo will be a path
import burgerLogo from '../../done-assets/images/burger-logo.png'

interface ILogoProps {
  height?: string
}

const Background = styled.div`
  padding: 8px;
  height: ${(p: ILogoProps) => (p.height ? p.height : '80%')};
  text-align: center;
`

const Image = styled.img`
  height: 100%;
`

const Logo: React.SFC<ILogoProps> = props => {
  return (
    <Background height={props.height}>
      <Image src={burgerLogo} alt="BurgerStop" />
    </Background>
  )
}

export default Logo

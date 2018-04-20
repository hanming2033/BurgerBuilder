import * as React from 'react'
import styled from '../../my-styled-components'

interface IlayoutProps {
  name?: string
}

const MainContainer = styled.main`
  margin-top: 16px;
`

const layout: React.SFC<IlayoutProps> = props => {
  return (
    <>
      <div>Toolbar, sidedrawer,backdrop</div>
      <MainContainer>{props.children}</MainContainer>
    </>
  )
}

export default layout

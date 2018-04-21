import * as React from 'react'
import styled from '../../my-styled-components'

interface IbuilControlsProps {
  tmp?: string
}

const MainControls = styled.div`
  width: 100%;
`

const builControls: React.SFC<IbuilControlsProps> = props => {
  return (
    <>
      <p>1</p>
      <p>2</p>
    </>
  )
}

export default builControls

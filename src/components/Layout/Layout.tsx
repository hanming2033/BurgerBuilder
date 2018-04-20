import * as React from 'react'

interface ILayoutProps {
  name?: string
}

const Layout: React.SFC<ILayoutProps> = props => {
  return (
    <>
      <div>Toolbar, sidedrawer,backdrop</div>
      <main>{props.children}</main>
    </>
  )
}

export default Layout

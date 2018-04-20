import * as React from 'react'
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import { ThemeProvider } from './my-styled-components'
import theme from './theme'

class App extends React.Component {
  public render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <Layout>
            <BurgerBuilder />
          </Layout>
        </div>
      </ThemeProvider>
    )
  }
}

export default App

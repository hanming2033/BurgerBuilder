import * as React from 'react'
import Layout from './components/done-Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder'
import Checkout from './containers/Checkout'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Orders from './containers/Orders'

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <div>
          <Layout>
            <Switch>
              {/* ok */}
              <Redirect from="/" exact to="/burgerbuilder" />
              <Route path="/orders" component={Orders} />
              {/* ok */}
              <Route path="/burgerbuilder" component={BurgerBuilder} />
              <Route path="/cart" component={Checkout} />
            </Switch>
          </Layout>
        </div>
      </BrowserRouter>
    )
  }
}

export default App

import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Provider} from 'react-redux'

import store from './redux/store'

import Counter from './pages/Counter'
import Displays from './pages/Displays'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path='/' exact component={Counter} />
            <Route path='/display' component={Displays} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

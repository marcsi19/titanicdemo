import React, {Component} from 'react'
import Main from './components/main'
import {Route} from 'react-router-dom'

class Routes extends Component {
  render() {
    return <Route path="/" component={Main} />
  }
}

export default Routes

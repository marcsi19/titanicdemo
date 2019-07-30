import React, {Component} from 'react'
import Main from './components/main'
import {Route} from 'react-router-dom'

/**
 * COMPONENT
 */
class Routes extends Component {
  render() {
    return <Route path="/" component={Main} />
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default Routes

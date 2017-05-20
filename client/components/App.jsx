import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import Food from './Food'
import Register from './Register'
import Login from './Login'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      users: props.users
    }
  }
  saveUser (user) {
    let users = this.state.users

    this.setState({users})
  }

  render () {
    return (
      <Router>
        <div>
          <Food />
          <Login />
          <Route path='/register' component={Register} />

        </div>
      </Router>
    )
  }
}

export default App

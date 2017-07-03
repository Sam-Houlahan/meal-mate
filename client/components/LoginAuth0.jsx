import React, { Component, PropTypes } from 'react'
import Auth0Lock from 'auth0-lock'
import { HashRouter as Router,withRouter,Link } from 'react-router-dom'
import {connect} from 'react-redux'

class LoginAuth0 extends Component {

  constructor (props) {
    super(props)

    this._lock = new Auth0Lock(props.clientId, props.domain)
  }

  componentDidMount() {
    this._lock.on('authenticated', (authResult) => {
      window.localStorage.setItem('auth0IdToken', authResult.idToken)
       this.props.history.push(`/food`)
    })
  }

  _showLogin = () => {
    this._lock.show()
  }

    static loggedIn () {
    const token = AuthService.getToken()
    return !!token && !AuthService.isTokenExpired(token)
  }


  render() {
    return (
      <Router>
      <div>
       <button onClick={this._showLogin}> Log in </button>
      </div>
      </Router>
    )
  }
}

export default withRouter(LoginAuth0)

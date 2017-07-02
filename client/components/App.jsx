import React from 'react'
import Navinstance from './Navbar'
import Header from './Header'
import LoginAuth0 from './LoginAuth0'
import { graphql, gql } from 'react-apollo'
import { withRouter } from 'react-router-dom'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

const clientId = '0uFsjVMbk3xpNP0NSvxAOTpelw1Db7Oh'
const domain = 'meal-mate.au.auth0.com'

class App extends React.Component {
  constructor (props) {
    super(props)
  }

    logout = () => {
    // remove token from local storage and reload page to reset apollo client
    window.localStorage.removeItem('auth0IdToken')
    location.reload()
  }

  render () {
    return (
      <div>
        <button onClick = {this.logout}>Logout </button>
        <Navinstance />
        <Header />
      </div>
    )
  }
}

const userQuery = gql`
  query userQuery {
    user {
      id
    }
  }
`

export default graphql(userQuery, { options: {fetchPolicy: 'network-only' }})(withRouter(App))

import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo'
import App from './components/App'
import LoginAuth0 from './components/LoginAuth0'
import { HashRouter as Router, Route } from 'react-router-dom'
import Food from './components/Food'
import CreateUser from './components/CreateUser'

const networkInterface = createNetworkInterface({ uri: 'https://api.graph.cool/simple/v1/cj3urdvuqk7sc0154akpsdgo2' })

networkInterface.use([{
  applyMiddleware (req, next) {
    if (!req.options.headers) {
      req.options.headers = {}
    }

    // get the authentication token from local storage if it exists
    if (localStorage.getItem('auth0IdToken')) {
      req.options.headers.authorization = `Bearer ${localStorage.getItem('auth0IdToken')}`
    }
    next()
  }
}])

const client = new ApolloClient({ networkInterface })

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Route path='/' component={App} />
          <Route path='/food' component={Food} />
          <Route path='/login' component={LoginAuth0} />
          <Route path='/signup' component={CreateUser} />
        </div>
      </Router>
    </ApolloProvider>,
    document.getElementById('app')
  )
})

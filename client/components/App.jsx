import React from 'react'
import Navinstance from './Navbar'
import Header from './Header'
import Food from './Food'

class App extends React.Component {
  render () {
    return (
      <div>
        <Navinstance />
        <Header />
        <Food />
      </div>
    )
  }
}

export default App

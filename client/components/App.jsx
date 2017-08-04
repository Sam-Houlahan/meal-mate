import React from 'react'
import Header from './Header'
import Food from './Food'
import Footer from './Footer'

class App extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <Food />
        <Footer />
      </div>
    )
  }
}

export default App

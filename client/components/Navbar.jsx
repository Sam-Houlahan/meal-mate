import React from 'react'
import {HashRouter as Router, Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/lib/Navbar'
import Nav from 'react-bootstrap/lib/Nav'
import NavItem from 'react-bootstrap/lib/NavItem'

const Navinstance = () => {
  return (
    <Router>
      <Navbar inverse collapseOnSelect fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href='#'>Meal-Mate</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href='#'>Home</NavItem>

          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} ><Link to='/login'>Log in</Link></NavItem>

            <NavItem eventKey={2} ><Link to='/register'>Register</Link></NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Router>

  )
}

export default Navinstance
